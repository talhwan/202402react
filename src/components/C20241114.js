import React from 'react'

function Car(props){
  return <a>gogogo! : {props.id} ~~~~</a>
}

function TestBtn(){
  const message = () =>{
    alert(11111);
  };

  return (
    <button onClick={message}>gogo</button>
  );
}

function TestBtn2(){ 
  const message = (name) => { 
    alert("1111 :  " + name + " !!!"); 
  } 
  return ( 
    <button onClick={()=>{message("haha!")}}>Click Me</button> 
  ); 
} 

function TestBtn3(){ 
  const message = (name, event) => { 
    alert("[" + event.target.id + "] ///  " + name + " !!!"); 
  } 
 
  return ( 
    <button id="btn1" onClick={(e)=>{message("Sally",e)}}>Click Me</button> 
  ); 
} 

export default function C20241114(props) {

  // const array1 = [0,1,2,3];
  // const map1 = array1.map((x) => x*2);

  // const cars = ['a', 'b'];
  
  // const cars = [ 
  //   {id: 1, brand: 'Ford'},
  //    {id: 2, brand: 'BMW'},
  //    {id: 3, brand: 'Audi'}
  // ];
 
  return (
    <>
    {/* <TestBtn />
    <TestBtn2 />
    <TestBtn3 /> */}
      {/* <div>{props.name}</div> */}
      {/* <div>{props.obj.name}</div> */}
      {/* <div>{array1.map((x) =><input value={x}/>)}</div> */}
      {/* <div>{cars.map((car) =><input value={car}/>)}</div> */}
      {/* <div>{cars.map((car) =><Car key={car.id} name={car.id} />)}</div> */}
    </>
  )
}
