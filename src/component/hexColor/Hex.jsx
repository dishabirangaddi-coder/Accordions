import React, { useState } from 'react'

export default function Hex() {
    const[typeOfColor,setTypeOfColor]=useState('hex');
    const[color,SetColor]=useState('#000000');
    function randomUtility(length){
        return Math.floor(Math.random()*length);
    }
    function handleRandomHexColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor="#";
        for(let i=0;i<6;i++){
            hexColor+=hex[randomUtility(hex.length)];
        }
        SetColor(hexColor);
    }
    function handleRandomRGB(){
        const r=randomUtility(256);
        const g=randomUtility(256);
        const b=randomUtility(256);

        SetColor(`rgb(${r},${g},${b})`);
    }
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        background:color,
    }}
    >
        <button onClick={()=>setTypeOfColor('hex')}>Create hex color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={
            typeOfColor==='hex'
            ?handleRandomHexColor
            :handleRandomRGB
        }>Generate random color</button>
    </div>
  )
}
