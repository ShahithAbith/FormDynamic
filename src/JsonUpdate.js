// import React, { useEffect } from 'react'

// const JsonUpdate = ({obj}) => {

//     const updateJson = () => {
//         for(let i=0;i<obj.Fields.length;i++) {
//             if(obj.Fields[i].Fields.length > 0) {
//                 for(let j=0;j<obj.Fields[i].Fields.length;j++) {
//                     let field = obj.Fields[i].Fields[j]
//                     if(typeObj[field.Type]) {
//                         addingClassName(i,endCount,obj,"desc")
//                         endCount = 0;
//                     }else {
//                     endCount++;
//                   if(obj.Fields[i].Fields.length - 1 === j) {
//                     addingClassName(i,endCount,obj,"input")
//                 }
//                     }
//                 }
//             }
//         }
//     }
//     updateJson(obj.FormConfig)
// return (
//     <></>
// )
// }

// export default JsonUpdate


// {
//     "DisplayName": 2679,
//     "FormConfig": {
//       "Fields": [
//         {
//           "Key": "BasicDetails",
//           "DisplayName": "Basic Details",
//           "Type": "tab",
//           "Fields": [
//             {
//               "Key": "ID",
//               "DisplayName": 301,
//               "Type": "Text",
//               "IsRequired": true,
//               "MaxLen":5,
//               "Regex": "^[0-9]+$",
//               "ErrorMessage": {
//                 "Default": "Please enter a id",
//                 "Regex": "Id should be a integer"
//               }
//             },
//             {
//               "Key": "Name",
//               "DisplayName": 1048,
//               "Type": "Text",
//               "IsRequired": true,
//               "MaxLen": 16,
//               "Regex":"^[\\dA-Za-z]+[\\dA-Za-z\\s]{1,50}$",
//               "ErrorMessage": {
//                 "Default": "Please enter a Name",
//                 "Regex":"Please enter a valid name"
//             }
//           },
//             {
//               "Key": "Abbr1",
//               "DisplayName": 1004,
//               "Type": "Text",
//               "IsRequired": true,
//               "MaxLen": 7,
//               "hasValueupdater": true,
//               "ErrorMessage": {
//                 "Default": "Please enter button input"
//               }
//             },
//             {
//               "Key": "Abbr2",
//               "DisplayName": 1005,
//               "Type": "Text",
//               "MaxLen": 7,
//               "hasValueupdater": true
//             },
//             {
//               "Key": "TermPrompt",
//               "DisplayName": 10794,
//               "Type": "Text",
//               "MaxLen": 500,
//               "hasValueupdater": true
//             },
//             {
//               "Key": "Description",
//               "DisplayName": "2321",
//               "Type": "Textarea",
//               "MaxLen": 100
//             },
//             {
//               "Key": "Limits",
//               "DisplayName":"Limits",
//               "Type": "tab",
//               "Fields": [
//                 {
//                   "Key": "Minimum",
//                   "DisplayName": 1052,
//                   "Type": "Text",
//                   "Value":1,
//                   "MaxLen": 2,
//                   "Regex": "^[0-9]+$",
//                   "ErrorMessage": {
//                     "Regex": "Minimum should be a integer"
//                   }
//                 },
//                 {
//                   "Key": "Maximum",
//                   "DisplayName": 1053,
//                   "Type": "Text",
//                   "MaxLen": 2,
//                   "Value":1,
//                   "Regex": "^[0-9]+$",
//                   "ErrorMessage": {
//                     "Regex": "Maximum should be a integer"
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "Key": "Modifier",
//           "DisplayName": "Modifiers",
//           "Type": "tab",
//           "Fields": [
//         {
//           "Key": "Modifiers",
//           "Type": "repeat",
//           "RepeatConfig":{
//           "HideSelectedOption":true
//             },
//           "Fields": [
//             {
//               "Key": "ID",
//               "DisplayName":1054,
//               "Type": "dropdown",
//               "Placeholder": "(assign modifier)",
//               "hasDependency":true,
//               "RouteConfig": {
//                 "Path": "modifier"
//               },
//               "DataSource": {
//                 "Source": "modifier",
//                 "Parameters": []
//               }
//             },
//             {
//               "Key": "Sequence",
//               "DisplayName": 1034,
//               "Type": "Text",
//               "MaxLen": 3,
//               "Value":0,
//               "DependentFields": ["ID"],
//               "Hidden": true,
//               "Regex": "^[0-9]+$",
//               "ErrorMessage": {
//                 "Regex": "Sequence should be a integer"
//               }
//             }
//           ]
//         }
//       ]
//     },
//         {
//           "Key": "TranslationTab",
//           "DisplayName": 5396,
//           "Type": "tab",
//           "Fields": [
//             {
//               "Key": "Languages",
//               "Type": "translation", 
//               "CustomData": {
//                 "FormId": 11
//               }
//             }
//           ]
//         },
//         {
//           "Key": "ShowMappings",
//           "DisplayName": 3631,
//           "CustomData": {
//             "Source": "Items",
//             "PropertyName": "Name"
//           },
//           "RouteConfig":{
//             "Path": "item",
//             "Disable": false
//           },
//           "ErrorMessage": "No Items Found",
//           "Type": "tab"
//         },
//         {
//           "Key": "ShowLayout",
//           "DisplayName": 5516,
//           "Type": "tab"
//         },
//         {
//           "Key": "Images",
//           "DisplayName": "Additional Image",
//           "Type": "tab",
//           "Fields": [
//             {
//         "Key": "KioskImages", 
//         "DisplayName": "Image Picker", 
//         "Placeholder": "ImagePicker",
//         "Type": "customimagepicker"
//         } 
//             ]
//           }
//       ]
//       },
//         "GridConfig": {
//           "Columns": [
//             {
//               "name": "ID",
//               "header": "Id",
//               "sortable": true,
//               "type": "number",
//               "filtertype": "number"
//             },
//             {
//               "name": "Name",
//               "header": "Name",
//               "sortable": true,
//               "type": "string"
//             },
//             {
//               "name": "ActionButton",
//               "header": "Actions",
//               "defaultWidth": 60
//             }
//           ]
//         }
//       }