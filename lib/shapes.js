class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(shapeColor) {
        this.color = shapeColor;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="125,15 250,150 10,150" fill="${this.color}" />`;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="150" r="110" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="30" y="30" width="150" height="150" fill="${this.color}" />`
    }
}

module.exports = { Triangle, Circle, Square, }