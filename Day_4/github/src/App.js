import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
const axios = require('axios').default
function App() {
  const [state, setState] = useState('')
  const [state1, setState1] = useState([])

  useEffect(() => {
    getUser()
  }, [state])
  async function getUser() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${state}`
      )
      setState1(response.data.items)
    } catch (error) {
      console.error(error)
    }
  }
  function rec(e) {
    e.preventDefault()
    setState(e.target.name.value)
  }

  return (
    <div className='App'>
      <div className='SA'>
        <form action='' onSubmit={(e) => rec(e)}>
          <input name='name' type='text' required />
          <input type='submit' />
        </form>
      </div>
      <div className=''>
        {state1.map((e) => (
          <div className='SP' key={e.id}>
            <div className='A'>
              <img src={e.avatar_url} alt='' />
            </div>
            <div className='B'>
              <h1>{e.login}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
