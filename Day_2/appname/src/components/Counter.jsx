import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const handle = (e) => {
    setCount(e)
  }
  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={() => handle(count + 1)}>ADD</button>
      <button onClick={() => handle(count - 1)}>SUB</button>
      <button onClick={() => handle(count *2)}>DUB</button>
    </>
  )
}

export default Counter
