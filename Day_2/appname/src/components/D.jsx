import React from 'react'
import { v4 as uuid } from 'uuid'
import ListItem from './Dx'
function List() {
  const [query, setQuery] = React.useState('')
  const [list, setList] = React.useState([])

  const handleadd = () => {
    const pay = {
      title: query,
      status: false,
      id: uuid(),
    }
    setList([...list, pay])
  }
  const handleDelete = (id)=>{
let updatedL = list.filter((item)=> item.id!==id)
setList(updatedL)

  }
  return (
    <>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        type='text'
        placeholder='add'
      />
      <button onClick={handleadd}>add</button>
      <div>
        {list.map((it) => {
          return <ListItem handleDelete={handleDelete} key={it.id} {...it} />
          
        })}
      </div>
    </>
  )
}

export default List
