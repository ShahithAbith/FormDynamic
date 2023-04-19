import './App.css';
import { useEffect, useState } from 'react';
import Input from './Input';
import Form from './Form';

function App() {
  let data = {
    "Name":"shahith",
    "Fields":[
      {
        "Key": "BasicDetails",
        "DisplayName": "Basic Details",
        "Type": "tab",
        "Fields":[
          {
            "Key": "ID",
            "DisplayName": 301,
            "Type": "desc",
            "IsRequired": true
          },
          {
            "Key": "ID",
            "DisplayName": 301,
            "Type": "Text",
            "IsRequired": true
          },
          {
            "Key": "Name",
            "DisplayName": 3880,
            "Type": "Text",
            "IsRequired": true,
            "MaxLen": 16
          },
          {
            "Key": "Email",
            "DisplayName": 301,
            "Type": "email",
            "IsRequired": true
          },
          {
            "Key": "Password",
            "DisplayName": 3880,
            "Type": "input",
            "IsRequired": true,
            "MaxLen": 16
          },
        ]
      },
      {
        "Key": "SpecificDetails",
        "DisplayName": "specific Details",
        "Type": "tab",
        "Fields" : [
          {
            "Key": "ID",
            "DisplayName": 301,
            "Type": "Text",
            "IsRequired": true
          },
          {
            "Key": "desc",
            "DisplayName": 3880,
            "Type": "desc",
            "IsRequired": true,
            "MaxLen": 16
          },
          {
            "Key": "Email",
            "DisplayName": 301,
            "Type": "email",
            "IsRequired": true
          },
          {
            "Key": "desc",
            "DisplayName": 3880,
            "Type": "desc",
            "IsRequired": true,
            "MaxLen": 16
          },
          {
            "Key": "input",
            "DisplayName": 3880,
            "Type": "input",
            "IsRequired": true,
            "MaxLen": 16
          },
        ]
      }
    ]
  }
  const [windowSize,setWindowSize] = useState(window.innerWidth);
  const [maxInput,setMaxInput] = useState(0);
  const [maxRow,setMaxRow] = useState(4);

 useEffect(() => {
  setMaxInput(Math.floor(windowSize/maxRow))
 },[windowSize])

// window.addEventListener('resize',() => {
//   setWindowSize(window.innerWidth)
// })

  return (
    <div className="App">
      <Form data = {data} />
      {/* <Input data = {data} windowSize = {windowSize} commoninputSize = {maxInput} maxRow = {maxRow} /> */}
    </div>
  );
}

export default App;
