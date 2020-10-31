
import * as PIXI from 'pixi.js';
import getAnimatedSprite from './utils/getAnimatedSprite';
import getBallAnimation from './utils/getBallAnimation';
import keyboard from './keyboard'
import { createFallingThing } from './falling';

const adv = require('./adv.png');

const ball = require('./ball.png');

const player1 = require('./Assets/player1.png');

const playerPosition = {
  x: 0,
  y: 0,
};


const game = () => {
  const app = new PIXI.Application();

  // app.stage.addListener(PIXI.interaction.InteractionEventTypes.)
  document.body.appendChild(app.view);

  // getAnimatedSprite(app, adv);
  const ballPlayer = getBallAnimation(app, ball);


  const downArrowListener: any = keyboard('ArrowDown');
  downArrowListener.press = () => {
    ballPlayer.y += 100
  };
  const upArrowListener: any = keyboard('ArrowUp');
  upArrowListener.press = () => {
    ballPlayer.y -= 100
  };
  const rightArrowListener: any = keyboard('ArrowRight');
  rightArrowListener.press = () => {
    ballPlayer.x += 100
  };
  const leftArrowListener: any = keyboard('ArrowLeft');
  leftArrowListener.press = () => {
    ballPlayer.x -= 100
  };

let tracker = 0
  app.ticker.add(() => {
    if(tracker === 50){
    createFallingThing(app)
    tracker = 0
    }else {
      tracker++
    }
    if (ballPlayer.x > 600) {
      ballPlayer.x = 0
    }
    // ballPlayer.x += 1
    console.log('foo')
  })
  return app
}

export default game;
