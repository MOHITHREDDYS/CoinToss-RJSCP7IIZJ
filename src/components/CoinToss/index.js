import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossingCoin = () => {
    const {total, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: heads + 1,
        total: total + 1,
      })
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: tails + 1,
        total: total + 1,
      })
    }
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state
    return (
      <div className="main_container">
        <div className="container">
          <h1 className="main_heading">Coin Toss Game</h1>
          <p className="sub_heading">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" />
          <button type="button" onClick={this.onTossingCoin}>
            Toss Coin
          </button>
          <div className="result_container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
