import  { useEffect } from 'react'
import loadingStatus from '../assets/Loading'
import { useState } from 'react';
import keyNames from '../assets/RemoveKeys';
import GetUserData from '../api/GetUserData';

function GetEmpData() {
    let [loading,setLoading] = useState(loadingStatus.isLoading);
    let [empData,setEmpData] = useState([])
    let [filterKeys,setFilterKeys] = useState([])
    let [fullData,setFullData] = useState([])
    let [allData] = GetUserData()
    useEffect(()=>{
        let getData = async()=>{
            try{
            let [data] = await allData()            
            setEmpData(data)
            setLoading(loadingStatus.loaded)
            setFullData(data)
            let a = {}
            for(let i=0;i<keyNames.length;i++){
              a[keyNames[i]]=new Set();
            }
            for(let i=0;i<data.length;i++){
              for(let i1=0;i1<keyNames.length;i1++){
                a[keyNames[i1]].add(data[i][keyNames[i1]])
              }
            }
            for(let i = 0;i<keyNames.length;i++){
              a[keyNames[i]] = [...a[keyNames[i]]]
            }
            a["age"]=[0,100]
            a['years_of_experience']=[0,100]
            setFilterKeys(a);
            }
            catch(e){
              console.log(e)
              setLoading(loadingStatus.error)
            }
        }
        getData()
    },[])
  return (
    {empData,loading,setEmpData,filterKeys,fullData}
  )
}

export default GetEmpData

