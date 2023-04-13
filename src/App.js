import './App.css';
import { useEffect, useState } from 'react';
import Input from './Input';

function App() {
  const [windowSize,setWindowSize] = useState(window.innerWidth);
  const [maxInput,setMaxInput] = useState(0);
  const [maxRow,setMaxRow] = useState(3);

 useEffect(() => {
  setMaxInput(Math.floor(windowSize/maxRow))
 },[windowSize])

window.addEventListener('resize',() => {
  setWindowSize(window.innerWidth)
})

  return (
    <div className="App">
      <Input windowSize = {windowSize} commoninputSize = {maxInput} maxRow = {maxRow} />
    </div>
  );
}

export default App;
