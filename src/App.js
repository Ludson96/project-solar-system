import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <SolarSystem />
        </div>
        <div>
          <Missions />
        </div>
      </>
    );
  }
}

export default App;
