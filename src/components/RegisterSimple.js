import React from 'react'
import {useState} from "react";

export default function RegisterSimple() {
    const [input, setInput] = useState({
        name : ""
        ,birth : ""
    }); 
    console.log(input);

    const onChangeName = (e) => {
        setInput({
            ...input,
            name : e.target.value
        });
    }
    const onChangeBirth = (e) => {
        setInput({
            ...input,
            birth : e.target.value
        });
    }
    const onChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    return (
        <>
            <input 
            name="name"
            value={input.name}
            onChange={onChangeInput}
            type="text"
            />
            <div>{input.name}</div>
        
            <input 
            name="birth"
            value={input.birth}
            onChange={onChangeInput}
            type="date"
            />
            <div>{input.birth}</div>
        </>
    );

}
