import React, { useState, useEffect } from 'react'
export function Counter() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev == 1) {
          clearInterval(id)
        }
        return prev - 1
      })
    }, 2000)
//cleanup function return
    return () => {
      console.log('unmounted')
      clearInterval(id)
    }
  }, [])
  return <h1>Count: {count}</h1>
}
