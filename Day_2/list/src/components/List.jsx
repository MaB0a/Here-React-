import { useState } from 'react'
import { TodoInput } from './Create'
import { Lister } from './ListCreat'
import { DLister } from './Delister'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './sty.css'
export const List = () => {
  const [list, setList] = useState([])
  const [done, setDone] = useState([])

  const handleAdd = (todo) => {
    setList([...list, todo])
  }
  const handleTogg = (id) => {
    const A = list.filter((i) => i.id == id)
    let c = list.indexOf(A[0])
    list.splice(c, 1)
    setDone([...done, A[0]])
    A[0].status == false ? (A[0].status = true) : (A[0].status = false)
    setList([...list])
  }
  const handleImp = (id) => {
    const A = list.filter((i) => i.id == id)
    A[0].imp == false ? (A[0].imp = true) : (A[0].imp = false)
    setList([...list])
  }
  const handleDTogg = (id) => {
    const B = done.filter((i) => i.id == id)
    let c = done.indexOf(B[0])
    done.splice(c, 1)
    setList([...list, B[0]])
    B[0].status == true ? (B[0].status = false) : (B[0].status = true)
    setDone([...done])
  }
  const handleDImp = (id) => {
    const A = done.filter((i) => i.id == id)
    A[0].imp == false ? (A[0].imp = true) : (A[0].imp = false)
    setDone([...done])
  }
  const HH = () => {
    return (
      <div id='inner'>
        <FontAwesomeIcon icon={faChevronDown} /> Completed
      </div>
    )
  }
  return (
    <>
      <div className='dd'>
        <div className='divi'>Tasks</div>

        <div>
          <Lister list={list} handleTogg={handleTogg} handleImp={handleImp} />
        </div>
        <Collapsible open='true' trigger={HH()}>
          <div id='ABS'>
            <div id='dsx'></div>
            <DLister
              done={done}
              handleDTogg={handleDTogg}
              handleDImp={handleDImp}
            />

          </div>
        </Collapsible>

            <section className='below'></section>
        <div className='bottom'>
          <TodoInput handleAd={handleAdd} />
        </div>
      </div>
    </>
  )
}
