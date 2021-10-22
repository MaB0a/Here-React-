import React,{useState} from 'react'

function Ex() {
 const [count,setCount]=useState(0)
 //count is set on 0,setCount sets newer values to it.
 return (
   <div>
     <p>{count}</p>
     <button onClick={() => setCount(count + 1)}>click</button>
     <button onClick={() => setCount(count - 2)}>click</button>
   </div>
 )
}
export default Ex