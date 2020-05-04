import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



import './App.css';
import './normalize.css'
import './index.css'


import Aside from './components/Asise/Aside';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import BookList from './components/BookList/BookList';
import ThemeContextProvider from './contexts/ThemeContext';

import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Music from './pages/Music/Music';
import Games from './pages/Games/Games';






function App() {
  return (
    <div className="App">


      <ThemeContextProvider>
<Router>
          <Navbar />
          <Aside />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/books">
              <Books />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/games">
              <Games />
            </Route>


          </Switch>

          <Footer />
</Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
