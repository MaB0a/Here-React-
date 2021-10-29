import { useState, useEffect } from 'react'
import './Nav.css'

export const Mains = ({ Rate,Money }) => {
  return (
    <>
      <div className='Nav'>
        <button onClick={() => Rate('A')}>By Rating(Ascending)</button>
        <button onClick={() => Rate('D')}>By Rating(Descending)</button>
        <button onClick={() => Money('C')}>Cash Only</button>
        <button onClick={() => Money('O')}>Online Payment Only</button>
        <button>Sort By Cost for 2 people(Ascending)</button>
        <button>Sort By Cost for 2 people(Descending)</button>
        <button>Create</button>
      </div>
    </>
  )
}
