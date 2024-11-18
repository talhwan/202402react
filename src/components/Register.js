import React from 'react'
import {useState} from "react";

export default function Register() {
    const [name, setName] = useState("이름");
    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const [birth, setBirth] = useState();
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    return (
        <>
            <input 
            value={name}
            onChange={onChangeName}
            type="text"
            />
            <div>{name}</div>
        
            <input 
            value={birth}
            onChange={onChangeBirth}
            type="date"
            />
            <div>{birth}</div>
        </>
    );

}
