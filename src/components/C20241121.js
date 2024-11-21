import React from 'react'
import { useState } from 'react';
import axios from "axios"; 

export default function C20241121() {
    let defaultList = [{
        id : ""
        ,name : ""
      }];
    const [tempList, setTempList] = useState(defaultList);
    
    const getTest = () => { 
        //저는 목업 데이터를 가져왔지만, 다른 오픈 소스 데이터를 가져오셔도 됩니다!!
        axios.get("https://672818a8270bd0b975544eec.mockapi.io/api/v1/users") 
        .then((response) => { 
            console.log(JSON.stringify(response.data)); 
            setTempList(response.data);
        }) 
        .catch((error) => { 
            console.log(error);
        }) 
    }
    
    return (
        <>
            <div>{tempList.map((each) =><div><input value={each.name}/></div>)}</div>
            <button onClick={getTest}>
                call List
            </button>
        </>
    )
}
