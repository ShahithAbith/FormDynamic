import React, { useEffect } from 'react'

const JsonUpdate = () => {
    const data = [
        {
            key:"desc",
            value:"desc"
        },
        {
            key:"desc",
            value:"desc"
        },
        {
            key:"input",
            value:"input"
        },
        {
            key:"input",
            value:"input",
        },
        {
            key:"input",
            value:"input"
        },
        
    ]

     useEffect(() => {
        updateJson()
     },[])

     const updateJson = () => {
        let startCount = 0;
        let endCount = 0;
        for(let i=0;i<data.length;i++) {
            startCount++;
            switch (data[i].value) {
                case "desc":
                endCount++
                startCount = 0;
                endCount = 0;
                break;
                case "input":
                    endCount++;
                    break;
                default:
                    break;
            }
        }
     }

  return (
    <div>
      
    </div>
  )
}

export default JsonUpdate
