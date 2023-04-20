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

     const updateJson = (obj) => {
      for(let i=0;i<obj.Fields.length;i++) {
     let endCount = 0;
          if(obj?.Fields[i]?.Fields?.length > 0) {
              for(let j=0;j<obj.Fields[i].Fields.length;j++) {
                  let field = obj.Fields[i].Fields
                  if(typeObj[field[j].Type]) {
                      addingClassName(j,endCount,field,"desc")
                      endCount = 0;
                  }else {
                  endCount++;
                if(obj.Fields[i].Fields.length - 1 === j) {
                  addingClassName(j,endCount,field,"input")
              }
                  }
              }
          }
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
              let className = data[i - j - val]?.className
              data[i - j - val].className = className ? className + " input" + rem : "input" + rem;
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
