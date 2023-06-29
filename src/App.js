import './App.css';
import React, { Component } from 'react';
import AutoCompleteInput from './components/AutoCompeteInput';
import MapComponent from './components/MapComponent';
import { Col, Divider, Row, Typography } from 'antd';

function App() {  
  return ( 
    <div className="App">
      <Typography level={2} style={{
        fontSize:50, 
        textAlign:"center", 
        color:"#2111A7",
        fontWeight: 500
      }}>
        Search your country
      </Typography>      
      <Divider style={{borderWidth:"5px", borderColor:"#CDCDCD", borderStyle: "outset"}}></Divider>
      <Row gutter={5} justify="center">
        <Col span={20}>
          <AutoCompleteInput></AutoCompleteInput>
        </Col>          
      </Row> 
      <Row gutter={5} justify="center">
        <Col span={20}>
          <MapComponent></MapComponent>
        </Col> 
      </Row>    
    </div>
  );
}

export default App;
