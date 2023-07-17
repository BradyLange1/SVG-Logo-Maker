const {Circle, Square, Triangle} = require('./shapes.js')

describe('SVG', () => {
    describe('triangle', () => {
        it('should return an SVG code that is a polygon with specified points', () => {
            const shape = new Triangle()
            shape.setColor('blue')
            expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue"/>')
        })
    })
})
describe('SVG', () => {
    describe('circle', () => {
        it('should return an SVG code that is a circle with specified points', () => {
            const shape = new Circle()
            shape.setColor('red')
            expect(shape.render()).toEqual('<circle cx="100" cy="100" r="75" fill="red"/>')
        })
    })
})
describe('SVG', () => {
    describe('square', () => {
        it('should return an SVG code that is a rect with specified points', () => {
            const shape = new Square()
            shape.setColor('yellow')
            expect(shape.render()).toEqual('<rect x="20" y="20" width="150" height="150" fill="yellow"/>')
        })
    })
})