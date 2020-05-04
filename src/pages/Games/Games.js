import React, { Component } from 'react';
import WOW from 'wow.js'


class Games extends Component {
    componentDidMount() {
        const wow =  new WOW()
        wow.init();
    }
    render() { 
        return (
            <main className="games">
                <h1 className="headline wow fadeInDown" data-wow-offset="10" data-wow-delay="0.5s">Games</h1>
                
            </main> 
        );
    }
}
 
export default Games;