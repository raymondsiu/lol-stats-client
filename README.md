# League of Legends Match History App

## Running the Client

## Server

`https://intense-wildwood-81934.herokuapp.com/`

## `.env`

Ensure you have a `.env` file in the same folder as `main.js` with key:

`RIOT_API_KEY`

### Server API Logic to the RIOT API

`GET /lol/summoner/v3/summoners/by-name/{summonerName}?api_key={api_key}`

=> Retrieve accountId

- summoner name

`GET /lol/match/v3/matchlists/by-account/{accountId}`

=> Retrieve matches list. Extract gameId

For each gameId

`GET /lol/match/v3/matches/{matchId}`

- gameDuration
- gameCreation

=> participantIdentities => Find accountId => Save participantId

=> find participantId in participants => stats

- win
- kills, deaths, assists (KDA = (k + a) / d : 1)
- championId
- spell1Id
- spell2Id
- item1
- item2
- item3
- item4
- item5
- item6
- champLevel
