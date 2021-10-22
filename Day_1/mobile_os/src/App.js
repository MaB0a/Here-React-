import T from './components/T'
import Example from './components/Use'
import Ex from './components/Now'
import Task from './components/New'
import List from './components/Deltion'
function App() {
  return (
    <div>
      <h1>Mobile Operating Systems</h1>
      <Task />
      <ol>
        <li></li>
      </ol>
      <ul>
        <li>Android</li>
        <li>BlackBerry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>
      <h1>Mobile Manufacturer</h1>
      <Ex />

      <List />
      <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>
      <T />
      <Example />
    </div>
  )
}

export default App
