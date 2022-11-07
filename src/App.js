import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import NavBar from './components/navBar/NavBar';
import Body from './components/body/Body'

function App() {

  const [activeTab, setActiveTab] = useState('0')

  // const tabs = {
  //   'home': {
  //       title: 'Home',
  //       path: '/',
  //       content: <Home/>
  //   },
  //   'movies': {
  //       title: 'Movies',
  //       path: '/movies',
  //       content: <Movies/>
  //   },
  //   'events': {
  //       title: 'Events',
  //       path: '/events',
  //       content: <Events/>
  //   },
  //   'admin': {
  //       title: 'Admin',
  //       path: '/admin',
  //       content: <div>Admin tab</div>
  //   }
  // }

  return (
    <div className='page-container'>
      <Router>

        <NavBar setActiveTab={setActiveTab} activeTab={activeTab}/>
        <Body/>
      
      </Router>
    </div>
  );
}

export default App;
