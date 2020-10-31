

import * as PIXI from 'pixi.js';
import getBallAnimation from './utils/getBallAnimation';
const ball = require('./ball.png')
const player1 = require('./adv.png')

const getRandomXValue = (app) => {
    return Math.random() * app.screen.width
}



export const createFallingThing = (app) => {
    const fallingThing = getBallAnimation(app, player1);
    fallingThing.x = getRandomXValue(app)
    fallingThing.y = 0
    app.ticker.add(() => {
        fallingThing.y = fallingThing.y + 1
        if(fallingThing.y > app.screen.height){
            fallingThing.removeChild()
        }
    })
}