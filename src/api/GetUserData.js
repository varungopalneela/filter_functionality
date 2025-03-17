import { useCallback } from 'react';
import EmpLinkUrl from '../config/EmpList';
import axios from 'axios';

function GetUserData() {
    let allData = useCallback(async() => {
        let data = await axios(EmpLinkUrl);
        data = data.data;
       /**  for(let i=0;i<data.length;i++){
            delete data[i]['address']
            delete data[i]['company']
          }*/
        return [data];
    },[])
  return (
   [allData]
    )
}

export default GetUserData