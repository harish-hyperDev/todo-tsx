import { useState } from 'react';
import SearchBar from './Components/SearchBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='flex flex-col [&>*]:mx-auto font-Milkshake'>
        <div className='p-5 text-3xl'>Taskify</div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
