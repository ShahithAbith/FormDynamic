// import React, { useEffect, useRef, useState } from 'react'

// const Input = ({ windowSize, commoninputSize, maxRow,data }) => {

//     const [newJson,setNewJson] = useState(data);
//     let endCount = 0;

//    let typeObj = {
//     desc:"desc",
//     radio:"radio"
//    }

//    let arr = ["desc","radio"]
   
//      useEffect(() => {
//         updateJson(newJson);
//      },[])

//      const updateJson = (newJson,arr) => {
//         for(let i=0;i<newJson.length;i++) {
//             // switch(newJson[i].Type) {
//             //     case typeObj[newJson[i].Type] :
//             //         addingClassName(i,endCount,newJson,"desc")
//             //         endCount = 0;
//             //     break;
//             //         default:
//             //             endCount++
//             //         if(newJson.length - 1 === i) {
//             //             addingClassName(i,endCount,newJson,"input")
//             //         }
//             //         break;
//             // }
//             if(typeObj[newJson[i].Type]) {
//                 addingClassName(i,endCount,newJson,"desc")
//                 endCount = 0;
//             }
//             else {
//                 endCount++
//                 if(newJson.length - 1 === i) {
//                   addingClassName(i,endCount,newJson,"input")
//               }
//             }
//         }
//      }

//      const addingClassName = (index,count,data,type) => {
//         let val = 0;
//         if(type === "desc") {
//             val = 1;
//         }
//         if(count !== 0) {
//             let rem = count % maxRow;
//             for(let j=0;j<rem;j++) {
//                 let className = data[index - j - val].className
//                 data[index - j - val].className = className ? className + " " + "input" + rem : "input" + rem
//             }
//         }
//         setNewJson(data);
//      }
//     return (
//         <div className='form' style={{ width: windowSize }}>
//            {
//             newJson.map((data) => (
//                 <>
//                 {
//                     data.Type === "input" && (
//                         <div className={ `${data?.className}`}>
//                             <label>{data.key}</label>
//                             <input  />
//                         </div>
//                     )
//                 }
//                 {
//                     data.Type !== "input" && (
//                         <div className={ `textarea`}>
//                             <label>{data.key}</label>
//                             <textarea  />
//                         </div>
//                     )
//                 }
//                 </>
//             ))
//            }
//         </div>
//     )
// }

// export default Input

// function updateJson (obj,k) {
//     if(obj.Fields.length > 0) {
//         obj.Fields.forEach((field,i) => {
//           if(field?.Fields?.length) {
//             endCount = 0;
//             updateJson(field);
//           }
//           else {
//             if(obj.Key) {
//               if(typeObj[field.Type]) {
//                 addingClassName(i,endCount,obj,"desc")
//                 endCount = 0;
//             }
//             else {
//               endCount++;
//               if(obj?.Fields?.length - 1 === i) {
//                 addingClassName(i,endCount,obj,"input")
//             }
//           }
//             }
            
//         }
//         })
//     }
// } 

