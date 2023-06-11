import React from 'react';
import './App.css';
// import getData from './source/api';
import Header from './header/header';
import Main from './main/main';

class App extends React.Component {
   render(){
      return <>
      <Header parent={this}/>
      <Main parent={this}/>
      </>
   }
}

export default App;
