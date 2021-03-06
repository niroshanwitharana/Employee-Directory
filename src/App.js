import React from 'react';
import Wrapper from './components/Wrapper/index';
import Header from './components/Header/index';
import Table from './components/Table/index';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;
