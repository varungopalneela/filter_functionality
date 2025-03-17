import { useEffect } from 'react';
import './App.css';
import DataDisplay from './components/DataDisplay';
import NaviBar from './components/NaviBar';
import EmpDataContext from './context/EmpData';
import GetEmpData from './hooks/GetEmpData';


function App() {

  let {empData,loading,setEmpData,filterKeys,fullData} = GetEmpData()
  useEffect(()=>{console.log(process.env)},[])
  return (
    
    <div className="App">
      
      <EmpDataContext.Provider value={{filterKeys,setEmpData,fullData}}>
      <NaviBar loading={loading}></NaviBar>
      </EmpDataContext.Provider>    

      <DataDisplay loading={loading}  empData={empData}></DataDisplay>
    </div>
   
  );
}

export default App;
