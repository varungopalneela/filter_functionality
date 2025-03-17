import React, { useState } from 'react'
import Filters from './Filters'
import loadingStatus from '../assets/Loading'


function NaviBar({loading}) {
  let [show,setShow] = useState(false)
  let [filteredDataLength,setFilteredDataLength] = useState(false)
  return (
    <div className='row mt-3'>

      <h1 className='col-8'>Filter Functionality for Employee Data</h1>
      <div className='col-4 p-3'>
      {loading===loadingStatus.loaded && <button className='border border-info m-2' onClick={()=>setShow(!show)}>Filters</button>}
      {filteredDataLength && <span className='text-success'>{filteredDataLength} records found</span>}
      {show && <Filters setShow={setShow} setFilteredDataLength={setFilteredDataLength}></Filters>}
      </div>
    </div>
  )
}

export default NaviBar