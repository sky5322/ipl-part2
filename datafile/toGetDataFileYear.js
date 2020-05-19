const economicalBowlersByYear  = require('./economicalBowlersByYear')
const extraRunsConcededByEachTeamByYear  = require('./extraRunsConcededByEachTeamByYear')
const matchesPlayedPerYear  = require('./matchesPlayedPerYear')
const matchesWonByEachTeam  = require('./matchesWonByEachTeam')
const tossWinnerByTeam  = require('./tossWinnerByTeam')
const csvtojsonFile  = require('./csvtojsonFile')

async function toGetDataFileYear(year = '2019'){
    const deliveries = await csvtojsonFile('deliveries.csv')
    const matches = await csvtojsonFile('matches.csv')
    return {
        economicalBowlersByYear:economicalBowlersByYear(deliveries,matches,year),
        extraRunsConcededByEachTeamByYear:extraRunsConcededByEachTeamByYear(deliveries,matches,year)
    }
}

module.exports = toGetDataFileYear

