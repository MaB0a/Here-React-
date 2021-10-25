import './sty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons'
export const DLister = ({ done, handleDTogg, handleDImp }) => {
  console.log(done)
  return (
    <div id='kk1'>
      {done.map((i) => {
        return (
          <div key={i.id}>
            <div>
              <div>
                <button onClick={() => handleDTogg(i.id)}>Toggle</button>
              </div>
              <div>
                <button onClick={() => handleDImp(i.id)}>IMP!</button>
              </div>
              <div>
                {i.title}-
                {i.imp ? (
                  <FontAwesomeIcon icon={faStar} />
                ) : (
                  <FontAwesomeIcon icon={faCircle} />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
