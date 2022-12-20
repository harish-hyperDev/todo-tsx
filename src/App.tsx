import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='title'><div>Taskify</div></div>
    </div>
  );
}

export default App;
