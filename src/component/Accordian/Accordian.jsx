import React, { useState } from 'react'
import data  from './data';

export default function Accordian() {
    const[id,setId]=useState(null);
    const[Enablemultiselection,setEnablemultiselection]=useState(false);
    const[Multiple,setMultiple]=useState([]);
    const handleSingleSelection=(currId)=>{
        if(id==currId) setId(null);
        else setId(currId);
    }
  return (
    <div>
    <button onClick={()=>setEnablemultiselection(!Enablemultiselection)}>Multiple Selection Enable</button>
      <div>
        {data.map((item)=>(
            <div key={item.id}>
                <div onClick={()=>handleSingleSelection(item.id)}>
                    {item.question}
                </div>
                {id===item.id && (<div>
                    {item.answer}
                </div>)}
            </div>
        ))
        }
      </div>
    </div>
  )
}
