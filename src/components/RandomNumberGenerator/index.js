import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChanged = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onChanged}>
            Generate
          </button>
          <h1 className="heading1">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
