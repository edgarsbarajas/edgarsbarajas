import React from 'react'
import '../styles/menu.css'
import { fadeInLeft, fadeOutLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

class Menu extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      menuButtonDefault: "☰",
      menuButtonPressed: "✕",
      menuOpen: false
    }
  }

  renderButton(){
    if(this.state.menuOpen === false){
      return this.state.menuButtonDefault
    } else{
      return this.state.menuButtonPressed
    }
  }

  renderSideNav(){
    if(this.state.menuOpen){
      return(
        <StyleRoot className="sidenav" style={styles.fadeInLeft}>
          <ul>
            <a href='#about-me'><li>About Me</li></a>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </StyleRoot>
      )
    }
  }

  handleButtonClick(){
    this.state.menuOpen === false ? this.setState({ menuOpen: true }) : this.setState({ menuOpen: false })
  }

  render(){
    return(
      <div className='menu'>
        {this.renderSideNav()}
        <button onClick={() => {this.handleButtonClick()}}>{this.renderButton()}</button>
      </div>
    )
  }
}

const styles = {
  fadeInLeft: {
    animation: 'x .5s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeOutLeft: {
    animation: 'x .5s',
    animationName: Radium.keyframes(fadeOutLeft, 'fadOutLeft')
  }
}

export default Menu;
