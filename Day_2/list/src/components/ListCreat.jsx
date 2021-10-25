import './sty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons'
export const Lister = ({ list, handleTogg, handleImp }) => {
  return (
    <div>
      {list.map((i) => {
        return (
          <div key={i.id} id='jjl'>
            <div>
              <div>
                <button onClick={() => handleTogg(i.id)}>Toggle</button>
              </div>
              <div>
                <button onClick={() => handleImp(i.id)}>IMP!</button>
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
