import { useState } from 'react';
import './App.css';
import { Pokemon } from './Components/Pokemon';

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
           <Pokemon/>
      </div>
      
  )
}

export default App
