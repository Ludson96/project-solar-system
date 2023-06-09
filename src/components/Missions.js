import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const teste = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />));
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <div className="contain-mission">
          {teste}
        </div>
      </div>
    );
  }
}

export default Missions;
