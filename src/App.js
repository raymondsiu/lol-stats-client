import React from 'react'
import 'whatwg-fetch'

import './App.css'
import Match from './Match'
import SummonerForm from './SummonerForm'

const url = 'http://localhost:9000/matches/'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerName: null,
      inputText: '',
      matchList: [],
      loading: false,
      errorMessage: null
    }
  }

  componentDidMount() {}

  /**
   * When user clicks submit, initiate the request
   */
  handleDataRequest = async event => {
    event.preventDefault()
    if (this.state.inputText.trim().length === 0) return
    this.setState({ loading: true }, async () => {
      // Call our backend
      try {
        console.log('Fetching: ', url + this.state.inputText)
        let response = await fetch(url + this.state.inputText, { mode: 'cors' })
        let data = await response.json()
        this.setState({
          summonerName: data.summonerName,
          matchList: [...data.data],
          loading: false,
          errorMessage: null
        })
      } catch (err) {
        this.setState({ loading: false, errorMessage: err.toString(), summonerName: null })
      }
    })
  }

  handleInputChange = event => {
    this.setState({ inputText: event.target.value })
  }

  render() {
    const { loading, matchList, inputText, errorMessage } = this.state
    return (
      <div className="App">
        <section className="Header">
          <h1>
            <span className="font-Anton">League of Legends </span>
            <span className="font-Marker">STATS</span>
          </h1>
        </section>
        <section className="SummonerForm">
          <SummonerForm
            handleDataRequest={this.handleDataRequest}
            handleInputChange={this.handleInputChange}
            loading={loading}
            inputText={inputText}
          />
          {errorMessage}
        </section>
        <section className="Stats">
          <h3>Stats for {this.state.summonerName != null ? this.state.summonerName : '...'}</h3>
          {matchList.length > 0 &&
            matchList.map((match, ix) => {
              return (
                <Match
                  summonerName={match.summonerName}
                  gameDuration={match.gameDuration}
                  gameCreation={match.gameCreation}
                  champion={match.champion}
                  championLevel={match.championLevel}
                  win={match.win}
                  kills={match.kills}
                  deaths={match.deaths}
                  assists={match.assists}
                  spells={match.spells} //array
                  items={match.items} //array
                  key={`match-${ix}`}
                />
              )
            })}
        </section>
      </div>
    )
  }
}

export default App
