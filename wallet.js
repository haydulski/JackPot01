class Wallet {
    constructor(money) {
        let _money = money;

        this.getWalletValue = () => _money;
        //sprawdzanie czy można grać
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false
        }
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value
                } else if (type === "-") {
                    return _money -= value
                } else {
                    throw new Error("Zły parametr wyniku losowania");
                }
            } else {
                throw new Error(" Wartość kwoty jest nieprawidłowa")
            }
        }
    }
}