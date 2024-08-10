import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(urlPeople);
        console.log('Fetched Characters:', response.data); // Log check
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
  
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(urlPlanets);
        console.log('Fetched Planets:', response.data); // check 2
        setPlanets(response.data);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const getHomeworldName = (homeworldId) => {
    if (!homeworldId) {
      
      return 'Unknown';
    }

    const planet = planets.find(planet => planet.id === homeworldId);
    console.log('Homeworld ID:', homeworldId, 'Matched Planet:', planet); // other check
    return planet ? planet.name : 'Unknown';
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map(character => (
  <Character
    key={character.id}
    name={character.name}
    homeworld={getHomeworldName(character.homeworld)}
  />
))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App;