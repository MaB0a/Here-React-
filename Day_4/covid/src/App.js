import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
const axios = require('axios').default

function App() {
  const [state, setState] = useState([])
  const [district, setDistrict] = useState(0)
  const [area, setArea] = useState([])
  const [loc, setLoc] = useState(0)
  const [pin, setPin] = useState([])

  useEffect(() => {
    get()
  }, [])

  async function get() {
    try {
      const response = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/states`
      )
      setState(response.data.states)
    } catch (error) {
      console.log(error)
    }
  }

  function rec(p) {
    p.preventDefault()
    setDistrict(+p.target.state.value)
  }
  function cec(p) {
    p.preventDefault()
    setLoc(+p.target.district.value)
  }

  useEffect(() => {
    pet()
  }, [district])

  async function pet() {
    try {
      const res = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${district}`
      )
      setArea(res.data.districts)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    met()
  }, [loc])
  async function met() {
    try {
      const resp = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${loc}&date=31-10-2021`
      )
      setPin(resp.data.sessions)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='App'>
      <form action='' onSubmit={(e) => rec(e)}>
        <select name='state' id='a'>
          {state.map((e) => (
            <option value={e.state_id} key={e.state_id}>
              {e.state_name}
            </option>
          ))}
        </select>
        <input type='submit' />
      </form>
      <form action='' onSubmit={(e) => cec(e)}>
        <select name='district' id='b'>
          {area.map((e) => (
            <option value={e.district_id} key={e.district_id}>
              {e.district_name}
            </option>
          ))}
        </select>
        <input type='submit' />
      </form>
      <div className='pocus'>
        {pin.map((e) => (
          <div className='locus' key={pin.indexOf(e)}>
            <div className=''>
              <h1>{e.name}</h1>
              <h2>{e.address}</h2>
              <h3>fee: {e.fee == '0' ? 'free' : 'Rs.' + e.fee}</h3>
              <h4>
                From {e.from}- to {e.to}
              </h4>
              <h5>Age Limit: {e.min_age_limit}</h5>
              <h2>Vaccine: {e.vaccine}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
