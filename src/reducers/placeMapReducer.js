import { createSlice } from '@reduxjs/toolkit'
import { checkEmpty } from '../utils/placeMapUtils';
import { createAsyncThunk } from '@reduxjs/toolkit'

//Thunk middleware to get list of countries from GET API
export const getCountryListFromServer = createAsyncThunk("placeMap/getCountryList", async(_, {rejectWithValue})=>{
 const response = await fetch('https://mocki.io/v1/9c617765-6744-4413-9300-b15a31c585de');
 if(response.ok){
  const jsonResponse = await response.json();
  return jsonResponse;
 } else {
  return rejectWithValue({error:"Country list not fund"});
 }
});
export const placeMapReducer = createSlice({
  name: 'placeMap',
  //Initial state object
  initialState:{
    selectedCountry:{},
    countryList:[],
    mapHistory:[],
    historyCount: 0,
    isLoading: false,
    error:''    
  },
  reducers: {
    //Update the selected country details and history   
    updateCountryInfo: (state, action)=>{
        let countryInfo =  action.payload.selectedCountry;
        state.selectedCountry=countryInfo;
        if(!checkEmpty(countryInfo)){
            state.historyCount+=1;
            countryInfo.key = state.historyCount;
            countryInfo.searchedOn = new Date().toLocaleString();
            state.mapHistory.push(countryInfo);
        }        
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(getCountryListFromServer.pending, (state, action)=>{
      state.isLoading = true;
    });
    builder.addCase(getCountryListFromServer.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.error = '';
      state.countryList = action.payload;
    });
    builder.addCase(getCountryListFromServer.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.payload.error;
      state.countryList = [];
    });
  }
})
export const { updateCountryInfo } = placeMapReducer.actions
export default placeMapReducer.reducer