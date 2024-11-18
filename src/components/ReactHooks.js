import React from 'react'
import {useState} from "react";


// 함수 컴포넌트 내부에서만 호출 가능!
// 조건문 반복문에서는 호출 불가
//커스텀 훅 만들기 가능!

function useInput(){
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    }
    return [input, onChange];
}

export default function ReactHooks() {
    // const [input, setInput] = useState("");
    // const onChange = (e) => {
    //     setInput(e.target.value);
    // }

    const [input, onChange] = useInput();
    const [input1, onChange1] = useInput();

    return (
        <>
           <div>
                <input 
                value={input}
                onChange={onChange}
                />
                <input 
                value={input1}
                onChange={onChange1}
                />
           </div>
        </>
    );

}
