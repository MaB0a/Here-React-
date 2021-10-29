import logo from './logo.svg'
import './App.css'
import { Mains } from './comp/Mains'
import { Show } from './comp/Show'
import { useState, useEffect } from 'react'
const axios = require('axios').default

function App() {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:3001/rest')
      setData(...data, response.data)
      setData1(...data1, response.data)
    } catch (error) {
      console.error(error)
    }
  }
console.log(data);
  function Rate(val) {
    if (val == 'A') {
      let d = data.sort((a, b) => a.star - b.star)
      setData([...d])
    } else {
      let d = data.sort((a, b) => b.star - a.star)
      setData([...d])
    }
  }

  function Money(a) {
let x = [...data]
    if (a == 'C') {
      let d = data1.filter((e) => e.pay == 'CO')
      setData([...d])
    } else {
      let d = data1.filter((e) => e.pay == 'O')
      setData([...d])
    }
  }

  return (
    <>
      <div className='App'>
        <div className='App'>
          <Mains Rate={Rate} Money={Money} />
        </div>
        <div className='bapp'>
          <Show data={data} />
        </div>
      </div>
    </>
  )
}

export default App
