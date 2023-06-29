import { Button, Divider, Modal, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Space, Table, Tag } from 'antd';
import { Data } from '@react-google-maps/api';
const { Column} = Table;
export default function MapHistory(props) { 
    const mapHistoryList = useSelector((state) => state.placeMap.mapHistory);
    return(
        <Modal
            width="80%"
            open={props.open}
            onOk={props.onOk}
            onCancel={props.onCancel}
            footer={[
                <Button key="Close" onClick={props.onClose}>
                  Close
                </Button>
            ]}
        >
            <Typography level={2} style={{
                fontSize:30,
                color:"#2111A7",
                fontWeight: 500
            }}>
                History
            </Typography>      
            <Divider style={{borderWidth:"5px", borderColor:"#CDCDCD", borderStyle: "outset"}}></Divider>
            <Table dataSource={mapHistoryList}>
                <Column title="Country Code" dataIndex="code" key="code" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Latitude" dataIndex="latitude" key="latitude" />
                <Column title="Longitude" dataIndex="longitude" key="longitude" />
                <Column title="Searched on" key="searchedOn" dataIndex="searchedOn"/>
            </Table>
        </Modal>
    );   
}