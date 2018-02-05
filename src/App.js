import React, { Component } from 'react';
import './App.css'
import Header from './components/header'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Contact/>
        <AboutMe/>
        <Projects/>
        <Experience/>
      </div>
    );
  }
}

export default App;
