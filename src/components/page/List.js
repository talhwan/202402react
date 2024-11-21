import React from 'react';
import { useState } from 'react';
import axios from "axios"; 

export default function List() {

  let defaultList = [];
  const [tempList, setTempList] = useState(defaultList);

  const getList = () => { 
    //저는 목업 데이터를 가져왔지만, 다른 오픈 소스 데이터를 가져오셔도 됩니다!!
    axios.get("https://672818a8270bd0b975544eec.mockapi.io/api/v1/users") 
    .then((response) => { 
        console.log(JSON.stringify(response.data)); 
        setTempList(response.data);
        afterGetList();
    }) 
    .catch((error) => { 
        console.log(error);
    }) 
  }

  const afterGetList = () => { 
    alert("after Done");
  }

  return (
    <>
      <div>목록입니다!!</div>
      <div>{tempList.map((each) =><div><input value={each.name}/></div>)}</div>
      <button onClick={getList}>
          call List
      </button>
    </>
  )
}
