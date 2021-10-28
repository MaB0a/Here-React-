import { useState, useEffect } from 'react'

export function Timer() {
  const [count, setCount] = useState(10)
  const [count1, setCount1] = useState(0)
  const [count11, setCount11] = useState(0)
  const [count111, setCount111] = useState(true)

  if (count == count1) {
    setTimeout(function () {
      setCount111(false)
    }, 500)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        return prev - 1
      })
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  function reg(e) {
    e.preventDefault()
    // console.log(e.target.from.value)
    // console.log(e.target.to.value)
    if (e.target.from.value > e.target.to.value) {
      setCount111(true)
      setCount(e.target.from.value)
      setCount1(e.target.to.value)
    }else{

        alert('please enter frem value bigger than to value')

    }

  }

  return (
    <>
      {count111 ? <div>Count:{count}</div> : <div>Count:0</div>}

      <div className=''>
        <form
          action=''
          onSubmit={(e) => {
            reg(e)
          }}
        >
          <input name='from' type='number' placeholder='from' required />
          <input name='to' type='number' placeholder='to' required />
          <input type='submit' />
        </form>
      </div>
    </>
  )
}
