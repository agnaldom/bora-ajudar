import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Sobre from './Sobre'


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header />
                <Route exact path='/' component={Home} />
                <Route path='/sobre' component={Sobre} />
                <Footer />
            </div>    
        </Router>
    )
  }
}

export default App;
