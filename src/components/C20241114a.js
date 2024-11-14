import React from 'react'

function Car(props) { 
    return <li>I am a { props.brand }</li>; 
} 

export default function C20241114a(props) {
    
    // 1.array.map(callback function);
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map((x) => x * 2); 
    console.log("test : " + map1); 

    //return에 반영해보기!
    // const cars = ['Ford', 'BMW', 'Audi'];

    //키 값 주고 사용해보기
    const cars = [
        {id : 1, brand : "hyundai"},
        {id : 2, brand : "hyundai1"},
        {id : 3, brand : "hyundai2"}
    ];

    // fetch('https://reqres.in/api/users')
    // .then((response) => response.json())
    // .then((result) => alert(result.data));

    return (
        <>
            <div>C20241114a : {props.name}</div>
            <ul> 
                {/* {cars.map((car) => <Car brand={car} />)}  */}
                {/* {array1.map((each) => <div>{each}</div>)} 
                {array1.map((each) => <input value={each}/>)}  */}
                {cars.map((each) => <Car key={each.id} brand={each.brand} />)} 
            </ul> 
        </>
    )
}
