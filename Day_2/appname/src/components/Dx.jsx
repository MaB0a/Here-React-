import React from 'react'
import './sty.css'

function ListItem({ title, id, status, handleDelete }) {
  return (
    <div id='az'>
      <h1 id='title'>{title}</h1>
      <button id='delete' onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  )
}
export default ListItem
