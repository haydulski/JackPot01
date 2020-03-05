class Statistic {
    constructor() {
        this.gameResults = []
    }
    addGameToStats(win, bid) {
        let newScore = {
            win,
            bid
        }
        this.gameResults.push(newScore)
    }
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(element => element.win).length;
        let losses = this.gameResults.filter(element => !element.win).length;
        return [games, wins, losses]
    }
}