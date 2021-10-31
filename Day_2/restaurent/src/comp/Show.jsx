import { useState, useEffect } from 'react'
import './Nav.css'
const axios = require('axios').default
export const Show = ({ data }) => {
  return (
    <>
      <div className='Show'>
        {data.map((e) => (
          <div className='block' key={e.Id}>
            <h1>{e.name}</h1>
            <h4>{e.food}</h4>
            <h3>Rs. {e.Cost} For Two People</h3>
            <div className='bbb'>
              <h3>Min: {e.Min}</h3>
              <h3>{e.Time}</h3>
            </div>
            <div className='bbb'>
              <h3>Ratings: {e.star}</h3>
              <h3>Votes: {e.votes}</h3>
              <h3>Reviews: {e.Reviews}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
