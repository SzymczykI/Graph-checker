import { useState } from 'react';
import './App.css';
import Imput from './components/Input'

const App = () => {
const [paths, setPaths] = useState('');

console.log(paths)

  return (
    <div className="App">
   <Imput setPaths={setPaths} />

    </div>
  );
}

export default App;
