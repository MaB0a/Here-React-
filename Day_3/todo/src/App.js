import logo from './logo.svg'
import './App.css'
import { Todo } from './comp/Todo'
import { useState, useEffect } from 'react'
import { New } from './comp/NewTodo'
import {Timer} from "./comp/Timer"
function App() {
  const [data, setData] = useState([])
  const [dataa, setDataa] = useState(0)

  useEffect(() => {
    getData()
  }, [dataa])

  const getData = () => {
    fetch('http://localhost:3001/users')
      .then((d) => d.json())
      .then((res) => {
        setData(res)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  const fn = (fn) => {
    setData([...data, fn])
  }
console.log(data);
  return (
    <div className='App'>
      <Todo fn={fn} />
      {/* <div className='a'>
        {data.map((e) => (
          <h1 key={e.id}>{e.name}</h1>
        ))}
      </div> */}
      <button
        onClick={() => {
          setDataa(dataa + 1)
        }}
      >
        refresh
      </button>

      <div>
        ________________________________________________________________
      </div>
      <New />
      <div className=""><Timer /></div>
    </div>
  )
}

export default App
