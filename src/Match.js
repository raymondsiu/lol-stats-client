import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const matchBlock = css`
  width: 100%;
  border-radius: 3px;
  color: #fff;
  padding: 0.5em;
  margin-bottom: 1em;
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: top;
  font-size: 0.75em;
`

class Match extends React.Component {
  render() {
    console.log(this.props)
    const {
      summonerName,
      gameDuration,
      gameCreation,
      champion,
      championLevel,
      win,
      kills,
      deaths,
      assists,
      spells,
      items
    } = this.props
    return (
      <div
        className={css`
        ${matchBlock}
        background: linear-gradient(45deg, ${win ? '#00eeac' : '#ee3700'}, #333333);
      `}
      >
        <div>
          {summonerName}{' '}
          <p
            className={css`
              font-size: 0.3em;
            `}
          >
            {win ? 'Victory' : 'Loss'}
          </p>
        </div>
        <div
          className={css`
            font-size: 0.5em;
          `}
        >
          <p>
            <span style={{ fontSize: '1.4em' }}>{champion}</span> @ Lvl {championLevel}
          </p>
        </div>
        <div
          className={css`
            font-size: 0.3em;
          `}
        >
          <p style={{ fontSize: '1.3em' }}>Match Length:</p>
          <p>{(parseInt(gameDuration) / 60).toFixed(2)} minutes</p>
          <p style={{ fontSize: '1.3em' }}>Match Start:</p>
          <p>{new Date(gameCreation).toLocaleString()}</p>
        </div>
        <div
          className={css`
            font-size: 0.5em;
          `}
        >
          <p>
            <span style={{ fontSize: '1.3em' }}>Spells</span>
            <ul>
              <li>{spells[0] ? spells[0] : null}</li>
              <li>{spells[1] ? spells[1] : null}</li>
            </ul>
          </p>
        </div>
        <div
          className={css`
            font-size: 0.5em;
          `}
        >
          <p>
            <span style={{ fontSize: '1.3em' }}>Items</span>
            <ul>{items.map(item => (item ? <li key={item}>{item}</li> : null))}</ul>
          </p>
        </div>
        <div
          className={css`
            font-size: 0.5em;
          `}
        >
          <p style={{ fontSize: '1.3em' }}>
            KDA: {((kills + assists) / deaths).toFixed(2)}
            :1
          </p>
          <p style={{ fontSize: '1.3em' }}>Kills/Deaths/Assists</p>
          <p style={{ fontSize: '1.5em' }}>
            {kills}/{deaths}/{assists}
          </p>
        </div>
      </div>
    )
  }
}

Match.propTypes = {}

export default Match
