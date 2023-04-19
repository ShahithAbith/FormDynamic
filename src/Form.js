import React, { useEffect, useState } from 'react'
import JsonUpdate from './JsonUpdate';

const Form = ({data,maxRow}) => {
  console.log(maxRow,"maxRow")

    const [obj,setObj] = useState(data.FormConfig);

    let typeObj = {
      desc:"desc",
      radio:"radio"
    }

     let updatedObj = data.FormConfig;
     let endCount = 0;

     useEffect(() => {
      updateJson(updatedObj)
     },[])

    function updateJson (obj,k) {
        if(obj.Fields.length > 0) {
            obj.Fields.forEach((field,i) => {
              if(field?.Fields?.length) {
                endCount = 0;
                updateJson(field);
              }
              else {
                if(obj.Key) {
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
          for(let j=0;j<rem;j++) {
              let className = data.Fields[i - j - val]?.className
              data.Fields[i - j - val].className = className ? className + " input" + rem : "input" + rem;
          }
      }
      setObj(updatedObj)
   }
console.log(obj,"obj")
  return (
    <div>
         <JsonUpdate  obj = {obj} />
    </div>
  )
}

export default Form
