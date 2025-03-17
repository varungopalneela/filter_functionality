import React from 'react'

function FilterDivision({obj,selectKey}) {
  return (
    <button className='border border-info d-block w-100 p-1' onClick={()=>selectKey(obj)}>{obj}</button>
  )
}

export default FilterDivision