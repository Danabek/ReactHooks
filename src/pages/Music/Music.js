import React, { Component } from 'react';
import WOW from 'wow.js'


class Music extends Component {
    state = {  }
    componentDidMount() {
        const wow =  new WOW()
        wow.init();
    }
    render() { 
        return ( 
            <main className="Music">
                <h1 className="headline wow fadeInDown" data-wow-offset="50" data-wow-delay="0.5s">Music</h1>
            </main>
         );
    }
}
 
export default Music;