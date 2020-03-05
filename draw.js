class Draw {
    constructor() {
        this.options = ['url(./img1.jpg)', 'url(./img2.jpg)', 'url(./img3.jpg)'];
        let _result = this.drawResult()
        this.getDrawResult = () => _result

    }
    drawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * 3);
            const color = this.options[index];
            colors.push(color)
        }
        return colors
    }

}
const cdraw = new Draw();