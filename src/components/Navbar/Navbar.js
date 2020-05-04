import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext'
import logo from '../../assets/img/logo.png'
import './style.css'

class Navbar extends Component {
    static contextType = ThemeContext;

    state = {  }
    render() { 
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return ( 
            <header className="header">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h2>Community</h2>
                </div>
            </header>
         );
    }
}
 
export default Navbar;