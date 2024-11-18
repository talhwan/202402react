import React from 'react'

import {useState, useRef} from "react";

export default function C20241118UseRef() {

    const countRef = useRef(0);
    
const onChange = (e)=>{
    countRef.current++;
}

  console.log(count);

        return (
        <>
            <input />
        </>
    )
}
