import React, { useContext, useEffect, useState } from 'react'
import EmpDataContext from '../context/EmpData'
import FilterDivision from './FilterDivision';
import FilterKeyValues from './FilterKeyValues';
import GetFilteredData from '../api/GetFilteredData';

function Filters({setShow,setFilteredDataLength}) {
  let {filterKeys,setEmpData,fullData} = useContext(EmpDataContext);
  let [keyName,setKeyName]=useState(Object.keys(filterKeys)[0])
  let [toggleddata,setToggledData] = useState({})
  let selectKey = (obj)=>{
    setKeyName(obj)
  }

  
  let changeData = async()=>{
    let ans = await GetFilteredData(toggleddata,filterKeys,fullData);
    setFilteredDataLength(ans.length)
    setEmpData(ans)
  }
  let initial = async()=>{
    await Object.keys(filterKeys).map(ob=>{toggleddata[ob]=[];setToggledData(toggleddata);return [...filterKeys[ob]].map(o=>{toggleddata[ob].push(o===100 ? 100 : 0);return setToggledData(toggleddata)})})
  }
  useEffect(()=>{
    initial()
  },[])
  return (
    <div className='bg-danger container' style={{position:'absolute',right:'25px',width:'600px',margin:0}}>
      <button className='bg-light border-danger text-danger'style={{float:'right'}} onClick={()=>{setShow(false)}}>X</button>
    <div className='row p-2' >
      <div className='col-4 text-center border p-2'>
        {Object.keys(filterKeys).map(obj=><FilterDivision key={"filteredKeys"+obj} obj={obj} selectKey={selectKey}></FilterDivision>)}
      </div>
      <div className='col-8 bg-info border text-start'>
        <FilterKeyValues key={"filteredKeyvalues"+String(keyName)} keyName={keyName} obj={filterKeys[keyName]} toggleddata={toggleddata} setToggledData={setToggledData}></FilterKeyValues>
      </div>
    </div>
    <div>
      <button className='m-2 p-1' onClick={changeData}>Apply</button>
      <button className='m-2 p-1' onClick={()=>{setShow(false); setFilteredDataLength(false); return setEmpData(fullData)}}>Clear</button>
    </div>
    </div>
  )
}


export default Filters