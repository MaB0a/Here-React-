import logo from './logo.svg'
import './App.css'
import { Mains } from './comp/Mains'
import { Show } from './comp/Show'
import { useState, useEffect } from 'react'
const axios = require('axios').default

function App() {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [on, setOn] = useState(false)

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:3001/rest')
      setData(response.data)
      setData1(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  function Rate(val) {
    if (val == 'A') {
      let de = data1.sort((a, b) => a.star - b.star)
      setData([...de])
    } else if (val == 'D') {
      let de = data1.sort((a, b) => b.star - a.star)
      setData([...de])
    } else if (val == 'E') {
      let de = data1.sort((a, b) => a.Cost - b.Cost)
      setData([...de])
    } else if (val == 'F') {
      let de = data1.sort((a, b) => b.Cost - a.Cost)
      setData([...de])
    }
  }

  function Money(a) {
    if (a == 'C') {
      let d = data1.filter((e) => e.pay == 'CO')
      setData([...d])
    } else {
      let d = data1.filter((e) => e.pay == 'O')
      setData([...d])
    }
  }

  function shift() {
    on ? setOn(false) : setOn(true)
  }

  function send(e) {
    e.preventDefault()
let df = {
  name: e.target.name.value,
  food: e.target.food.value,
  Cost: e.target.Cost.value,
  Min: e.target.Min.value,
  Time: e.target.Time.value,
  star: e.target.star.value,
  votes: e.target.votes.value,
  Reviews: e.target.reviews.value,
  pay: e.target.pay.value,
}
console.log(df);
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name: e.target.name.value,
    //     food: e.target.food.value,
    //     Cost: e.target.Cost.value,
    //     Min: e.target.Min.value,
    //     Time: e.target.Time.value,
    //     star: e.target.star.value,
    //     votes: e.target.votes.value,
    //     Reviews: e.target.reviews.value,
    //     pay: e.target.pay.value,
    //   }),
    // }
    // fetch('http://localhost:3001/rest', requestOptions).then((response) =>
    //   response.json()
    // )

    console.log(e.target)

    // axios
    //   .post('http://localhost:3001/rest', {
    //     name: e.target.name.value,
    //     food: e.target.food.value,
    //     Cost: e.target.Cost.value,
    //     Min: e.target.Min.value,
    //     Time: e.target.Time.value,
    //     star: e.target.star.value,
    //     votes: e.target.votes.value,
    //     Reviews: e.target.reviews.value,
    //     pay: e.target.pay.value,
    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }

  return (
    <>
      <div className='App'>
        <div className='App'>
          <Mains Rate={Rate} Money={Money} shift={shift} />
        </div>
        {on ? (
          <div className='bapp'>
            <Show data={data} />
          </div>
        ) : (
          <div>
            <form action='' className='BB' onSubmit={(e) => send(e)}>
              Name: <input type='text' name='name' />
              Food: <input type='text' name='food' />
              Cost: <input type='number' name='Cost' />
              Min: <input type='text' name='Min' />
              Time: <input type='text' name='Time' />
              Star: <input type='number' name='star' />
              Votes: <input type='number' name='votes' />
              Reviews: <input type='number' name='reviews' />
              Pay: <input type='text' name='pay' />
              <input type='submit' />
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default App
