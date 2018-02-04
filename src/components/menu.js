import React from 'react'
import '../styles/menu.css'

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
        <div className="sidenav">
          <ul>
            <li>Projects</li>
            <li>Experience</li>
            <li>About Me</li>
          </ul>
        </div>
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

export default Menu;
