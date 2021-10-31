import { useState, useEffect } from 'react'

export const Todo = ({fn}) => {
  const [data, setData] = useState([])
  const [text, setText] = useState('')

  const BB = () => {
   console.log(fn);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: text }),
    }
    fetch('http://localhost:3001/users', requestOptions)
      .then((response) => response.json())

      .then((data) => {
        setData(...data)
        fn(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

  }

  return (
    <>
      <div className='as'>HI</div>
      <div className='ap'>
        <input
          name='az'
          onChange={(e) => {
            setText(e.target.value)
          }}
          type='text'
        />
        <button onClick={BB}>add</button>
      </div>
    </>
  )
}
