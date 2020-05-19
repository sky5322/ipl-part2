function tossWinnerByTeam(matches) {
    const result = {}
    for (let match of matches) {
        if (result[match.toss_winner]) {
            result[match.toss_winner] += 1
        } else {
            result[match.toss_winner] = 1
        }
    }
    return result
}

module.exports = tossWinnerByTeam