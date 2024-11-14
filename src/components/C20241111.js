import React from 'react'

import C20241114 from './C20241114.js';

export default function C20241111(props) {

  const tempName= "test2"; 
  const tempObj = {
    name : "name2"
    , number : 102
  };

  return (
    <>
      <div>C20241111 : {props.name}!!22</div>
      <div>obj.name = {props.obj.name}</div>
      <div>obj.name1 = {props.obj.name1}</div>
      <div>obj.number = {props.obj.number}</div>
      
      {/* <C20241114 name="123" obj={tempObj} /> */}
    </>
  )
}
