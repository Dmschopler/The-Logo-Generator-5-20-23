class Logo {
    constructor() {
        this.text = "";
        this.shapes = "";
    }
    render() {
        return `svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}${this.shapes}</svg>`; 
    }
    setShapes(shape) {
        this.shapes = shape.render();
    }
    setText(writtenText, textColor) {
        this.text = `<text x="120" y="100" font-size="40" text-anchor="middle" fill="${textColor}">${writtenText}</text>`
    }
}

module.exports = Logo;