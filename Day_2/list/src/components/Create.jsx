import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './sty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const TodoInput = ({ handleAd }) => {
  const [text, setText] = useState('')
  const handleChange = ({ target }) => {
    setText(target.value)
  }
  const TU = ()=>{
    return <FontAwesomeIcon icon={faPlus} />
  }
  const handleClick = () => {
   const data = {
    title: text,
    status: false,
    id: uuid(),
    imp: false,
   }
   text==""?(window.alert("Please enter a task")):handleAd(data)
  }
  return (
    <>
        <button id="JK" onClick={handleClick}>{TU()}</button>
      <input id="JJ"
        type='text'
        placeholder="  What 'You' wanna do"
        value={text}
        onChange={handleChange}
        required
      />
    </>
  )
}
