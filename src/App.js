import './App.css';
import { useEffect, useState } from 'react';
import Input from './Input';
import Form from './Form';

function App() {
  let data = {
    "DisplayName": 1214,
    "FormConfig": {
      "DisableBasedonAction": {
        "Edit": [
          "StoreName"
        ]
      },
      "HeaderButtons": { 
        "View": [
          {
            "Key": "Cancel",
            "IconClass": "icon-Close",
            "ButtonAction": "Cancel",
            "Type": "button",
            "ButtonType": "Secondary",
            "CssClass": "cancel-btn"
          },
          {
            "Key": "Edit",
            "IconClass": "icon-Edit",
            "ButtonType": "Primary",
            "Type": "button"
          }
      ],
        
        "Create": [
          {
            "Key": "Cancel",
            "IconClass": "icon-Close",
            "ButtonAction": "Cancel",
            "Type": "button",
            "ButtonType": "Secondary",
            "CssClass": "cancel-btn"
          },
          {
            "Key": "Submit",
            "IconClass": "icon-save",
            "ButtonAction": "Submit",
            "Type": "button",
            "ButtonType": "Primary",
            "CssClass": "primary-btn"
          }
      ],
      "Edit": [
          {
            "Key": "Cancel",
            "IconClass": "icon-Close",
            "ButtonAction": "Cancel",
            "Type": "button",
            "ButtonType": "Primary"
          },
          {
            "Key": "Submit",
            "IconClass": "icon-save",
            "ButtonAction": "Submit",
            "Type": "button",
            "ButtonType": "Primary"
          }
      ]
    },
      "Fields": [
        {
          "Key": "BasicDetails",
          "DisplayName": "Basic Details",
          "Type": "tab",
          "Fields": [
            {
              "Key": "ID",
              "DisplayName": 301,
              "Type": "Text",
              "IsRequired": true,
              "Disabled": true,
              "MaxLen": 3,
              "Regex": "^[0-9]+$",
              "ErrorMessage": {
                "Default": "Please enter a id",
                "Regex": "Id should be a integer"
              }
            },
            {
              "Key": "Name",
              "DisplayName": 1356,
              "Type": "Text",
              "IsRequired": true,
              "MaxLen": 50,
              "Regex": "^[\\dA-Za-z]+[\\dA-Za-z\\s]{1,50}$",
              "ErrorMessage": {
                "Default": "Please enter a Name",
                "Regex": "Please enter a valid name"
              }
            }
          ]
        },
        {
          "Key": "StoreDetails",
          "DisplayName": "Store Details",
          "Type": "tab",
          "Fields": [
            {
              "Key": "StoreName",
              "DisplayName": 3340,
              "IsRequired":true,
              "Type": "Text",
              "MaxLen": 50,
              "ErrorMessage": {
                "Default": "Please enter a Store Name"
              }
            }
          ]
        },
        {
          "Key": "ShowMappings",
          "DisplayName": 3200,
          "CustomData":  {
            "Source": "Stores",
            "PropertyName": "Name"
          },
          "RouteConfig":{
            "Path": "StoreV2",
            "Disable": false
          },
          "ErrorMessage": "No Store Found",
          "Type": "tab"
        }    
      ]
    } , 
  
    "GridConfig": {
      "Columns": [
        {
          "name": "ID",
          "header": "Id",
          "sortable": true,
          "type": "number",
          "filtertype": "number"
        },
        {
          "name": "Name",
          "header": "Division Name",
          "sortable": true,
          "type": "string"
        },
        {
          "name": "Actionbutton",
          "header": "Actions",
          "defaultWidth": 80,
          "sortable": false,
          "actionButtons": [
            {
              "icon": "icon-Edit",
              "name": "Edit"
            }
          ]
        }
      ]
    }
  }
  const [windowSize,setWindowSize] = useState(window.innerWidth);
  const [maxRow,setMaxRow] = useState(4);

//  useEffect(() => {
//   if(windowSize >= '1024') {
//     setMaxRow(4)
//   }
//   else if(windowSize >= '768') {
//     setMaxRow(3)
//   }
//   else if(windowSize >= '600') {
//     setMaxRow(2)
//   }
//   else {
//     setMaxRow(1)
//   }
//  },[windowSize])

// window.addEventListener('resize',() => {
//   setWindowSize(window.innerWidth)
// })

  return (
    <div className="App">
      <Form data = {data} maxRow = {maxRow} />
      {/* <Input data = {data} windowSize = {windowSize} commoninputSize = {maxInput} maxRow = {maxRow} /> */}
    </div>
  );
}

export default App;
