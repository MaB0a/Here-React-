import React from 'react'


function ListItem({title,id,status,handleDelete}) {

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}
export default ListItem 