import React from 'react'

const SummonerForm = ({ handleDataRequest, loading, inputText, handleInputChange }) => {
  return (
    <form className="form" onSubmit={handleDataRequest}>
      <input className="summoner-input" type="text" value={inputText} onChange={handleInputChange} placeholder="Summoner Name" disabled={loading} />
      <button className="submit-button" type="submit" title="Submit" disabled={loading}>
        Submit
      </button>
    </form>
  )
}
export default SummonerForm
