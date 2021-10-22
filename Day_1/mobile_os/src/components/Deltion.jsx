import React from 'react'
import { v4 as uuid } from 'uuid'
import { ListItem } from './D'
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
    console.log(list);
  }
  return (
    <>
      <input
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
        type='text'
        placeholder='add'
      />
      <button onClick={handleadd}>add</button>
      <div>
        {list.map((it) => {
          // return <div key={it.id}>{it.title}</div>
          <ListItem key={it.id} {...it} />
        })}
      </div>
    </>
  )
}

export default List
