import React, { useEffect, useState } from 'react'

const Form = ({data}) => {
    const [obj,setObj] = useState(data)
    let typeObj = {
      desc:"desc",
      radio:"radio"
     }
     useEffect(() => {
      updateJson(obj)
     },[])
     let endCount = 0;
    function updateJson (obj) {
        if(obj.Fields.length > 0) {
            obj.Fields.forEach((field,i) => {
              if(field?.Fields?.length) {
                endCount = 0;
                updateJson(field);
              }else {
                if(typeObj[field.Type]) {
                  addingClassName(i,endCount,obj.Fields,"desc")
                  endCount = 0;
              }
              else {
                endCount++
                if(obj?.Fields?.length-1 === i) {
                  addingClassName(i,endCount,obj.Fields,"input")
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
          let rem = count % 4;
          for(let j=0;j<rem;j++) {
              let className = data[i - j - val]?.className
              data[i - j - val].className = className ? className + " input" + rem : "input" + rem;
          }
      }
      setObj(data)
   }
   
console.log(obj,"obj")
  return (
    <div>
      <h1>Form</h1>
    </div>
  )
}

export default Form
