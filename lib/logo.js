class Logo {
    constructor() {
        this.shapes = "";
        this.text = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapes}${this.text}</svg>`; 
    }
    setShapes(shape) {
        this.shapes = shape.render();
    }
    setText(writtenText, textColor) {
        this.text = `<text x="100" y="120" font-size="40" text-anchor="middle" fill="${textColor}">${writtenText}</text>`
    }
}

module.exports = Logo;