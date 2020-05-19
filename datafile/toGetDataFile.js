const economicalBowlers  = require('./economicalBowlers')
const extraRunsConcededByEachTeam  = require('./extraRunsConcededByEachTeam')
const matchesPlayedPerYear  = require('./matchesPlayedPerYear')
const matchesWonByEachTeam  = require('./matchesWonByEachTeam')
const tossWinnerByTeam  = require('./tossWinnerByTeam')
const csvtojsonFile  = require('./csvtojsonFile')

async function getData(){
    const deliveries = await csvtojsonFile('deliveries.csv')
    const matches = await csvtojsonFile('matches.csv')
    return {
        matchesPlayedPerYear:matchesPlayedPerYear(matches),
        matchesWonByEachTeam:matchesWonByEachTeam(matches),
        economicalBowlers:economicalBowlers(deliveries,matches),
        extraRunsConcededByEachTeam:extraRunsConcededByEachTeam(deliveries,matches),
        tossWinnerByTeam:tossWinnerByTeam(matches)
    }
}

module.exports = getData
