//useState
import React from 'react'
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render(){
   return (
     <div>
       <p>clicked this {this.state.count}</p>
       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
         click
       </button>
       <button onClick={() => this.setState({ count: this.state.count - 1 })}>
         click
       </button>
     </div>
   )
  }
}
export default Example