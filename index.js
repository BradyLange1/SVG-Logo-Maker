const inquirer = require('inquirer')
const {Circle, Square, Triangle, Shape} = require('./lib/shapes.js')
const fs = require('fs')

class SVG {
    constructor() {
        this.text = ''
        this.shapeColor = ''
        this.textColor = ''
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter three characters'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter text color'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Enter shape',
                    choices: ['Circle', 'Triangle', 'Square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter color of shape'
                },
            ])
            .then(({text, textColor, shape, shapeColor}) => {
                this.shape = shape
                this.text = text
                this.shapeColor = shapeColor
                this.textColor = textColor
            })
    }
    render(){
        let shapeDraw = ''
        let textDraw = ''
        if (this.shape == 'Triangle'){
            const shape = new Triangle
            shape.setColor(this.shapeColor)
            shapeDraw = shape.render()
            textDraw = `<text text-anchor="middle" x="150" y="120" fill="${this.textColor}">${this.text}</text>`
        } else if (this.shape == 'Circle'){
            const shape = new Circle
            shape.setColor(this.shapeColor)
            shapeDraw = shape.render()
            textDraw = `<text text-anchor="middle" x="100" y="100" fill="${this.textColor}">${this.text}</text>`
        } else if (this.shape == 'Square'){
            const shape = new Square
            shape.setColor(this.shapeColor)
            shapeDraw = shape.render()
            textDraw = `<text text-anchor="middle" x="100" y="100" fill="${this.textColor}">${this.text}</text>`
        }
        fs.writeFile('logo.svg', 
        `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shapeDraw}
        ${textDraw}
        </svg>`
        , (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    }
}

const shape = new SVG

async function drawShape(){
    await shape.run()
    shape.render()
}

drawShape()

module.exports = SVG