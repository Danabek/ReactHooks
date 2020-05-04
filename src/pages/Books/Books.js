import React, { Component } from 'react';
import WOW from 'wow.js'

class Books extends Component {
    componentDidMount() {
        const wow =  new WOW()
        wow.init();
    }
    render() { 
        return ( 
            <main className="Books">
                <h1 className="headline wow fadeInDown" data-wow-offset="50" data-wow-delay="0.5s">Books</h1>
            </main>
         );
    }
}
 
export default Books;