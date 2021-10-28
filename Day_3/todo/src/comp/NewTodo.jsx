import { useState, useEffect } from 'react'

export const New = () => {
  const [todo, setTodo] = useState(0)
  const [bull, setBull] = useState('')
  const [data, setData] = useState([])
  const [count, setCount] = useState(1)
  const add = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: bull, status: false }),
    }
    fetch('http://localhost:3001/todo', requestOptions).then((response) =>
      response.json()
    )
    setTimeout(function () {
      setTodo(todo + 1)
    }, 500)
  }
  console.log(count)

  useEffect(() => {
    getData()
  }, [todo,count])

  const getData = () => {
    fetch(`http://localhost:3001/todo?_page=${count}&_limit=5`)
      .then((d) => d.json())
      .then((res) => {
        setData(res)
      })
  }

  const del = (id) => {
    fetch(`http://localhost:3001/todo/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        // Do some stuff...
      })
      .catch((err) => console.log(err))
    setTimeout(function () {
      setTodo(todo + 1)
    }, 400)
  }
  const el = (id, status) => {
    let t = false
    status ? (t = false) : (t = true)
    fetch(`http://localhost:3001/todo/${id}`, {
      method: `PATCH`,
      body: JSON.stringify({
        status: t,
      }),
      headers: { 'Content-type': `application/json; charset=UTF-8` },
    }).then((response) => response.json())
    setTimeout(function () {
      setTodo(todo + 1)
    }, 400)
  }
  return (
    <>
      <div className=''>
        <input
          name='vn'
          type='text'
          onChange={(e) => {
            setBull(e.target.value)
          }}
        />
        <button onClick={add}>ADD</button>
        <button
          onClick={() => {
            setTodo(todo + 1)
          }}
        >
          refresh
        </button>
      </div>
      <div className='a'>
        {data.map((e) => (
          <h1 key={e.id}>
            {e.name}-
            <button onClick={() => el(e.id, e.status)}>
              {e.status ? 'Done!' : 'Not Done'}
            </button>
            - <button onClick={() => del(e.id)}>DEL</button>
          </h1>
        ))}
      </div>
      <button onClick={() => setCount(count - 1)}> prev </button>
      <button onClick={() => setCount(count + 1)}> next </button>
    </>
  )
}
