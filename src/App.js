import './App.css';
import React, { Component } from 'react';
import AutoCompleteInput from './components/AutoCompeteInput';
import MapComponent from './components/MapComponent';
import { Col, Row } from 'antd';

function App() {  
  return ( 
    <div className="App">
      <Row gutter={16} justify="center">
        <Col span={18}>
          <AutoCompleteInput></AutoCompleteInput>
        </Col>          
      </Row> 
      <Row gutter={16} justify="center">
        <Col span={18}>
          <MapComponent></MapComponent>
        </Col> 
      </Row>    
    </div>
  );
}

export default App;
