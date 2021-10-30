import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
function App() {
  const [cross, setCross] = useState([
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
  ])
  const [tur, setTurn] = useState(true)
  const [cir, setCir] = useState([])
  const [ans, setAns] = useState('')

  let W = false
  function checkH() {
    for (let i = 0; i < cross.length; i++) {
      if (
        cross[i][0] == cross[i][1] &&
        cross[i][1] == cross[i][2] &&
        (cross[i][0] == 'X' || cross[i][0] == 'O')
      ) {
        W = true
        return W
      } else if (
        cross[0][i] == cross[1][i] &&
        cross[0][i] == cross[2][i] &&
        (cross[0][i] == 'X' || cross[0][i] == 'O')
      ) {
        W = true
        return W
      }
    }
    if (
      cross[0][0] == cross[1][1] &&
      cross[1][1] == cross[2][2] &&
      (cross[0][0] == 'X' || cross[0][0] == 'O')
    ) {
      W = true
      return W
    } else if (
      cross[0][2] == cross[1][1] &&
      cross[1][1] == cross[2][0] &&
      (cross[0][2] == 'X' || cross[0][2] == 'O')
    ) {
      W = true
      return W
    }
  }

  function rec(p, q) {
    let d = [...cross]
    if (tur == false) {
      setCir([...cir, ['x', p, q]])
      setTurn(true)
      d[p][q] = 'X'
    } else {
      setCir([...cir, ['o', p, q]])
      setTurn(false)
      d[p][q] = 'O'
    }
    setCross(d)
  }
  checkH()


  function ch() {
    if (W == true) {
      if (cir.length % 2 == 0) {
        return setAns('X Wins')
      } else if (cir.length % 2 == 1) {
        return setAns('O Wins')
      }
    } else if (W == false && cir.length == 9) {
      return setAns('TIE')
    }
  }
  // useEffect(() => {
  //   ch()
  // }, [ans])

  var myVar

  function myFunction() {
    myVar = setTimeout(ch, 100)
  }
  myFunction()

  return (
    <div className='App'>
      <div className=''>
        <button onClick={() => rec(0, 0)}>{cross[0][0]}</button>
        <button onClick={() => rec(0, 1)}>{cross[0][1]}</button>
        <button onClick={() => rec(0, 2)}>{cross[0][2]}</button>
      </div>
      <div className=''>
        <button onClick={() => rec(1, 0)}>{cross[1][0]}</button>
        <button onClick={() => rec(1, 1)}>{cross[1][1]}</button>
        <button onClick={() => rec(1, 2)}>{cross[1][2]}</button>
      </div>
      <div className=''>
        <button onClick={() => rec(2, 0)}>{cross[2][0]}</button>
        <button onClick={() => rec(2, 1)}>{cross[2][1]}</button>
        <button onClick={() => rec(2, 2)}>{cross[2][2]}</button>
      </div>
      <div className=''>
        <h1>{ans}</h1>
      </div>
    </div>
  )
}

export default App
