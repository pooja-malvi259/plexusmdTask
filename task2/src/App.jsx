import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import AboutUs from './components/about/AboutUs';
import Client from './components/client/Client';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import News from './components/news/News';
import Success from './components/success/Success';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Header></Header>
        <AboutUs></AboutUs>
        <Success></Success>
        <News></News>
        <Client></Client>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      );
  }
}

export default App;
