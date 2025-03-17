import { useEffect } from "react";

function FilterKeyValues({keyName,obj,toggleddata,setToggledData}) {
  let ch1 = (obj,ind)=>{
    toggleddata[keyName][ind] = obj.target.value
    setToggledData(toggleddata)
    }
    
  return (
    <>
    {obj.length && (
      (obj[0]!==0) ? 
    <div>
    {obj.map((ob,index)=>< div key={"checkboxes"+ob}><input key={index}  type='checkbox' checked={toggleddata ? toggleddata[keyName] ?toggleddata[keyName][index] : false : false} 
    onChange={()=>{
      toggleddata[keyName][index] = 1 - toggleddata[keyName][index]
      setToggledData({...toggleddata})
    }} value={ob}/> {ob}<br></br> 
    </div>)}
    </div>
    : 
    <div className="p-4 border border-light m-2">
      <div className="row">
      <label className="col-7" >Minimum {keyName}</label>
      <input className="col-5" type="number" defaultValue={String(toggleddata[keyName][0])} onChange={(o)=>ch1(o,0)} />
      </div>
      <br></br>
      <div className="row">
      <label className="col-7">Maximum {keyName}</label>
      <input className="col-5" type="number" defaultValue={String(toggleddata[keyName][1])} onChange={(o)=>ch1(o,1)} />
      </div>

    </div>)}
    </>
  );

}

export default FilterKeyValues;