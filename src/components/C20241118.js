import React from 'react'

export default function C20241118(props) {
    const msg = (obj_1, event) => {
        alert(obj_1 + "//" + event.target.id);
    }

    return (
        <>
            <div>C20241118 : {props.name}</div>
            <button id="btn1" onClick={(e) => msg("haha", e)}>thanks!</button>
        </>
    )
}
