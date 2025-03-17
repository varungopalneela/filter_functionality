import React, {  useEffect, useState } from 'react'
import loadingStatus from '../assets/Loading'
import EmpData from './EmpData'

function DataDisplay({loading,empData}) {
  let [empKeys,setEmpKeys] = useState([])
  useEffect(()=>{  
    if(empData.length){
      setEmpKeys(Object.keys(empData[0]))
    }
  },[empData])
  
  return (
    <div>
      {loading!==loadingStatus.loaded ? 
      <div>{loading}</div> : 
      <div>
        <table className='table table-hover'>
          <thead>
            <tr >
              {empKeys.length!==0 && empKeys.map(obj=><th key={String(obj.id)+"heading"+obj}>{obj}</th>)}
            </tr>
          </thead>
          <tbody>
            {empData.map(obj=> <EmpData key={"empdata"+String(obj.id)} obj={obj} empKeys={empKeys}></EmpData>
            )}
          </tbody>
        </table>
      </div>
        }
    </div>
  )
}

export default DataDisplay