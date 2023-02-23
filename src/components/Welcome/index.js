/* Write your code here */
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const text = isSubscribed ? 'Subscribe' : 'Subscribed'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you Happy Learning</p>
          <button className="btn" type="button" onClick={this.onButton}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
