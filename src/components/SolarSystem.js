import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const teste = planets.map(({ name, image }) => (
      <PlanetCard
        key={ name }
        planetName={ `${name}` }
        planetImage={ `${image}` }
      />));
    return (
      <>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <main className="container-planet">
          {teste}
        </main>
      </>
    );
  }
}

export default SolarSystem;
