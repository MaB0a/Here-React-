import logo from './logo.svg'
import './App.css'
import React from 'react'
import { Counter } from './comp/Counter'
function App() {
  const [data, setData] = React.useState([])
  const [dataa, setDataa] = React.useState([])
  const [vis, setVis] = React.useState(true)
  const [l, setL] = React.useState('')
  const [state, setState] = React.useState('')


  const handle = () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: l, status: true }),
    }
    fetch('http://localhost:3001/todo', requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      setState(1)
  }


  React.useEffect(() => {
    console.log(state);
    fetch('http://localhost:3001/todo')
      .then((d) => d.json())
      .then((res) => {
        setData(res)
      })
  }, [state])
  React.useEffect(() => {
    async function get() {
      const res = await fetch('http://localhost:3001/users').then((d) =>
        d.json()
      )
      setDataa(res)
    }
    get()
  }, [])
  return (
    <>
      <div className='App'>
        {data.map((e) => (
          <div key={e.id}>{e.title}</div>
        ))}
      </div>
      <div className="App">____________________________________</div>
      <div className='App'>
        {' '}
        {dataa.map((e) => (
          <div key={e.id}>{e.name}</div>
        ))}
      </div>
      <div className='App'>
        {vis ? (
          <>
            <Counter />
            <button onClick={() => setVis(false)}>hide</button>
          </>
        ) : (
          <>
            {' '}
            <button onClick={() => setVis(true)}>show</button>
          </>
        )}
      </div>
      <div className='App'>
        <input name='BB' type='text' onChange={(e) => setL(e.target.value)} />
        <button onClick={handle}>add</button>
        <h1>{state}</h1>
      </div>
    </>
  )
}

export default App
