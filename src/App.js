import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js'
import ContactList from './components/ContactList.js'
import NewContactPage from './components/NewContact.js'


class App extends Component {
  constructor () {
    super ()
    this.state = {
      route: '/home'
    }
    window.onhashchange = () =>{this.hashChange()}
  }
  componentDidMount () {
    this.hashChange()
  }

  hashChange () {
    const validRoutes = ['/home', '/contacts', '/new-contact']
    const defaultRoute = '/home'
    const newRoute = window.location.hash.replace(/^#/, '').trim()
    const isValidRoute = validRoutes.includes(newRoute)

    if (isValidRoute) {
      this.setState({route: newRoute})
    } else {
      window.location.hash = defaultRoute
    }
  }

  render() {
    let pageComponent = <HomePage />
    if (this.state.route === '/contacts') {
      pageComponent = <ContactList />
    } else if (this.state.route === '/new-contact') {
      pageComponent = <NewContactPage />
    }


    return (
      <main className="App">
       <h1 className='title'> Contact List </h1>
       <NavBar activeRoute={this.state.route} />
       {pageComponent}
      </main>
    );
  }
}

export default App;
