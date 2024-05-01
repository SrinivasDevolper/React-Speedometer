import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {mph: 0}

  acceBtn = () => {
    const {mph} = this.state
    if (mph !== 200) {
      this.setState(prevMph => ({mph: prevMph.mph + 10}))
    }
  }
  breakBtn = () => {
    const {mph} = this.state
    if (mph !== 0) {
      this.setState(prevMph => ({mph: prevMph.mph - 10}))
    }
  }

  render() {
    const {mph} = this.state
    return (
      <div className="bg-container">
        <h1>Speedometer</h1>
        <div>
          <img
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1>Speed is {mph}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button onClick={this.acceBtn} className="btn2">
              Accelerate
            </button>
            <button onClick={this.breakBtn} className="btn1">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
