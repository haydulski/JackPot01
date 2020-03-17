
class Game {
    constructor() {
        this.stats = new Statistic
        this.wallet = new Wallet(100)
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('span.wallet');
        this.boards = document.querySelectorAll('.game .color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWin = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render()
    }
    render(result = "", bid = 0, wonMoney = 0, money = this.wallet.getWalletValue(), games = this.stats.showGameStatistics(), colors = ['url(./img4.jpg)', 'url(./img4.jpg)', 'url(./img4.jpg)']) {
        console.log('gramy');
        if (result) {
            result = `Wygrałeś ${wonMoney}$ farciarzu`
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$`
        }
        this.spanResult.textContent = result;
        this.spanWallet.textContent = money
        this.spanGames.textContent = games[0]
        this.spanWin.textContent = games[1]
        this.spanLosses.textContent = games[2]
        this.boards.forEach((board, i) => {
            board.style.backgroundImage = colors[i]
        })
    }
    startGame() {
        if (this.inputBid.value < 1) return alert('Wprowadź wartość stawki')
        let bid = Math.floor(this.inputBid.value)
        if (!this.wallet.checkCanPlay(bid)) {
            return alert('Masz za mało środków')
        }
        this.wallet.changeWallet(bid, "-")
        this.draw = new Draw();
        const colors = this.draw.getDrawResult()
        let win = Result.checkWin(colors)
        console.log(win);
        let wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney, "+")
        this.stats.addGameToStats(win, bid)

        this.render(win, bid, wonMoney, this.wallet.getWalletValue(), this.stats.showGameStatistics(), colors)
        this.inputBid.value = "";
    }
}
