import React, { useEffect } from 'react'

const JsonUpdate = ({obj}) => {

    if(obj?.Fields?.length) {
        return (
<div>

       

</div>
        )
       
    }else {
        <div>No Data to show</div>
    }
  
 
}

export default JsonUpdate
