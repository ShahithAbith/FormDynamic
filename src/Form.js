import React, { useEffect, useState } from 'react'
import JsonUpdate from './JsonUpdate';

const Form = ({data,maxRow}) => {
    const [obj,setObj] = useState(data.FormConfig);

    let typeObj = {
      desc:"desc",
      radio:"radio"
    }

     let updatedObj = data.FormConfig;

     useEffect(() => {
      updateJson(updatedObj)
     },[])
let endCount = 0;
     function updateJson (obj,k) {
      if(obj.Fields.length > 0) {
          obj.Fields.forEach((field,i) => {
            if(field?.Fields?.length) {
              endCount = 0;
              updateJson(field,1)
            }
            else {
              if(k === 1) {
                  if(typeObj[field.Type]) {
                      addingClassName(i,endCount,obj,"desc")
                      endCount = 0;
                  }
                  else {
                    endCount++;
                    if(obj?.Fields?.length - 1 === i) {
                      addingClassName(i,endCount,obj,"input")
                  }
                  }
              }
          }
          })
      }
  } 

    const addingClassName = (i,count,data,type) => {
      
      let val = 1;
      if(type === "input") {
        val = 0
      }
      if(count !== 0) {
          let rem = count % maxRow;
          if(rem === 3) {
            let className = data.Fields[i - val]?.CssClass
            for(let j=0;j<rem-1;j++) {
                data.Fields[i - j - val - 1].CssClass = className ? className + " input" + 2 : "input" + 2;
            }
            data.Fields[i - val].CssClass = className ? className + " input" + 1 : "input" + 1;
        }
        else {
            for(let j=0;j<rem;j++) {
                let className = data.Fields[i - j - val]?.CssClass
                data.Fields[i - j - val].CssClass = className ? className + " input" + rem : "input" + rem;
            }
        }
      }
      setObj(updatedObj)
   }
console.log(obj,"obj")
  return (
    <div>
         {/* <JsonUpdate  obj = {obj} /> */}
    </div>
  )
}

export default Form
