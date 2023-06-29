import { createSlice } from '@reduxjs/toolkit'
import { checkEmpty } from '../utils/placeMapUtils';
export const placeMapReducer = createSlice({
  name: 'placeMap',
  initialState: {
    value: 0,
    selectedCountry:{},
    countryList:[],
    mapHistory:[],
    historyCount: 0    
  },
  reducers: {   
    updateCountryInfo: (state, action)=>{
        let countryInfo =  action.payload.selectedCountry;
        state.selectedCountry=countryInfo;
        if(!checkEmpty(countryInfo)){
            state.historyCount+=1;
            countryInfo.key = state.historyCount;
            countryInfo.searchedOn = Date.now().toString();
            state.mapHistory.push(countryInfo);
        }        
    },
    loadCountryList: (state,action) =>{       
       state.countryList = action.payload.countryList; 
    }
  },
})
export const { loadCountryList, updateCountryInfo } = placeMapReducer.actions
export default placeMapReducer.reducer