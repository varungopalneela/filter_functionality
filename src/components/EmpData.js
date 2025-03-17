import React from 'react'

function EmpData({obj,empKeys}) {
  return (
    <tr >
    {empKeys.map((objs,index)=><td key={String(obj.id)+"empkeys"+String(index)}>{obj[objs]}</td>)}
  </tr>
  )
}

export default EmpData