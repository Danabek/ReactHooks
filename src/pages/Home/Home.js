import React, { Component } from 'react';
import WOW from 'wow.js'

class Home extends Component {
    state = {  }
    componentDidMount() {
        const wow =  new WOW()
        wow.init();
    }
    render() { 
        return ( 
            <main className="Home">
                <h1 className="headline wow fadeInDown" data-wow-offset="50" data-wow-delay="0.5s">Home</h1>
            </main>
         );
    }
}
 
export default Home;