
let GetFilteredData = async(toggleddata,filterKeys,fullData) => {
    let t3 = {}

    let check = (obj)=>{
        let flag=1;
        keys.map(ob=>{
        if(!t3[ob].length)
            return 1;
        if(ob==='age' || ob==='years_of_experience'){
            

            if(!(t3[ob][0]<=obj[ob] && obj[ob]<=t3[ob][1])){
            
            flag=0;
            }
        }
        else if(!(t3[ob].includes(obj[ob])))
            {
            flag= 0;
            }
        return 1;
        }
        )
        return flag;
    }
    let keys = Object.keys(toggleddata)
    keys.map(ob=>{t3[ob]=[]; toggleddata[ob].map((o,index)=>{if(ob==='age' || ob==='years_of_experience'){
          t3[ob].push(parseInt(o))
        }
          else if(o===1){
          t3[ob].push([...filterKeys[ob]][index])
        }
        
        return 1;
        })
        return 1;
        })
        let ans = ( fullData.filter((obj)=>check(obj)))
        return ans
  
}

export default GetFilteredData