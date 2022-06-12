import { Component } from 'react';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

export default class App extends Component{

  name = "Bibek"


  render(){
    return(
      <>
        <Header/>
        <Body/>
       
      </>
    )

  }
}