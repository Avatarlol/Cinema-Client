import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import NavBar from './components/navBar/NavBar';
import Body from './components/body/Body'
import Movies from './components/body/movies/Movies'
import Events from './components/body/events/Events'
import Admin from './components/body/admin/Admin';
import Home from './components/body/home/Home';

function App(props) {

  const [activeTab, setActiveTab] = useState('0')

  const tabs = [
    {
      key: '0',
      title: <img  id='0' src='../favicon.ico'/>,
      path: '',
      content: <Home/>
    },
    {
      key: '1',
      title: 'Movies',
      path: '/movies',
      content: <Movies/>
    },
    {
      key: '2',
      title: 'Events',
      path: '/events',
      content: <Events/>
    },
    {
      key: '3',
      title: 'Admin',
      path: '/admin',
      content: <Admin/>
    }
  ]

  return (

    <div className='page-container'>
      <Router>
          <NavBar setActiveTab={setActiveTab} activeTab={activeTab} tabs={tabs}/>
          <Body setActiveTab={setActiveTab} tabs={tabs}/>
      </Router>
    </div>
  );
}

export default App;
