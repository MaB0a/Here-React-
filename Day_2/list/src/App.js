import { List } from './components/List'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.css'
function App() {
  const AA = ()=>{
    return (
      <div id='X'>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    )
  }
  return (
    <>
      <div id='A'>
        <div id='B'>
          <div id='Top'></div>
          <Collapsible
            classParentString='LLL'
            triggerOpenedClassName='LLL'
            // openedClassName='m'
            // triggerClassName='n'
            trigger={AA()}
            open='true'
            transitionTime='10'
            contentOuterClassName='j'
          >
            <List />
          </Collapsible>
        </div>
      </div>
      <div id='task'>dscassd</div>
    </>
  )
}

export default App
