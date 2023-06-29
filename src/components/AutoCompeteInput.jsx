import { AutoComplete,Button,Descriptions, Divider, Input, Modal, Typography } from 'antd';
import React, { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapActions from '../actions/mapActions';
import { checkEmpty } from '../utils/placeMapUtils';
import COUNTRY_LIST from '../mock-data/countryList';
import { updateCountryInfo, loadCountryList } from '../reducers/placeMapReducer';
import { SearchOutlined, HistoryOutlined } from '@ant-design/icons';
import MapHistory from './mapHistoryModal';

export default function AutoCompleteInput(props) {
    const dispatch = useDispatch();
    const [country, setCountry] = useState(null);
    const [searchList, setSearchList] = useState([]);
    const curState = useSelector((state)=>state);
    const countryList = useSelector((state) => state.placeMap.countryList);    
    const count = useSelector((state) => state.placeMap.countryList);
    const countryInfo = useSelector((state) => state.placeMap.selectedCountry);
    const [showHistory, setShowHistory] = useState(false);
    
    const handleSearchCountry = (value: string) => {
        if(checkEmpty(value)){
            setSearchList([]);
            return;
        }
        let searchVal = value.toLowerCase();
        let filteredList=[];        
        countryList.map((country)=>{
            if(country.value.toLowerCase().includes(searchVal)){
                filteredList.push(country);
            }
        });
        setSearchList(filteredList);
    };
    const handleConutrySelection = (value)=>{
        setCountry(value);
    };
    const handleChangeSearch = (value, selectedObj)=>{
        setCountry(value);
        if(!checkEmpty(selectedObj)){ 
            dispatch(updateCountryInfo(mapActions.updateInfo(selectedObj)));
        } else {
            dispatch(updateCountryInfo(mapActions.updateInfo({}))); 

        }
    };
    const showHistoryModal =()=> {
        setShowHistory(true);
    };
    const closeHistoryModal =()=> {
        setShowHistory(false);
    };
    useEffect(()=>{        
        dispatch(loadCountryList(mapActions.loadCountryList(COUNTRY_LIST)));
    },[]);
    return(
        <div>             
           <AutoComplete
                style={{ width: 300, margin:"20px 0px" }}
                options={searchList}
                onSearch={handleSearchCountry}
                onSelect={handleConutrySelection}
                onChange={handleChangeSearch}
                value={country}
                placeholder="Type your country to search"
            />            
            <Button 
                type="primary" 
                icon={<HistoryOutlined />} 
                onClick={showHistoryModal}
                style={{ float: "right", margin:"20px 0px" }}
                >
                History
            </Button>
            <Typography>
                <Descriptions title="Selected country details">
                <Descriptions.Item label="Country Code">{countryInfo.code}</Descriptions.Item>
                <Descriptions.Item label="Country Name">{countryInfo.name}</Descriptions.Item>
                <Descriptions.Item label="Latitude">{countryInfo.latitude}</Descriptions.Item>
                <Descriptions.Item label="Longitude">{countryInfo.longitude}</Descriptions.Item>
                </Descriptions>
            </Typography>
            <Divider style={{borderWidth:"5px"}}></Divider>
            <MapHistory 
                open={showHistory}
                onOk={closeHistoryModal}
                onCancel={closeHistoryModal}
                onClose={closeHistoryModal}
            ></MapHistory>          
        </div>
    ); 
}