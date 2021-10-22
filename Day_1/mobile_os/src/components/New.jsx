import React from 'react'

function Task() {
  const [q, setQ] = React.useState('')
  const [tasks, setTasks] = React.useState([])
  const hangle = (e) => {
    const { value } = e.target
    setQ(value)
  }
  const hand = () => {
    const parload = {
      title: q,
      status: false,
    }
    let newer = [...tasks, parload]
    setTasks(newer)
  }
  return (
    <div>
      <h1>{q}</h1>
      <div>
        <input value={q} onChange={hangle} placeholder='anything' />
      </div>
      <button onClick={hand}>ADD</button>
      <div>
        {tasks.map((it) => {
          return <div key={it.id}>{it.title}</div>
          
        })}
      </div>
    </div>
  )
}
export default Task
