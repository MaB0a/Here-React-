import { useState, useEffect } from 'react'
import './Nav.css'
const axios = require('axios').default
export const Show = ({data}) => {


  return (
    <>
      <div className='Show'>ABCD
        {data.map((e) => (
          <div className='block' key={e.Id}>{e.name}</div>
        ))}
      </div>
    </>
  )
}
