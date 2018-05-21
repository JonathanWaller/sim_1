import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventory: []
    }
  }
  
  
  
  
  
  render() {
    return (
      <div className="App">
       <Header/>
       <div className='main-field'>
       <Dashboard />
       <Form />
       </div>
      </div>
    );
  }
}

export default App;
