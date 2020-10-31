
import * as PIXI from 'pixi.js';

const getAnimatedSprite = (app, image) => {
  let i = 0;
  const baseTexture = new PIXI.BaseTexture(image);
  // Render the stage
  app.renderer.render(app.stage);

  const textures = [];
  let x = 0;

  while (x < 3) {
    while (i < 4) {
      const rectangle = new PIXI.Rectangle(50 * i, 50 * x, 32, 32);
      const myTexture = new PIXI.Texture(baseTexture, rectangle);
      textures.push(myTexture);
      i += 1;
    }
    x += 1;
  }
  console.log({ textures });


  const currentPlayer = new PIXI.AnimatedSprite(textures, true);
  currentPlayer.loop = true;
  currentPlayer.animationSpeed = 0.10;
  currentPlayer.play();
  app.stage.addChild(currentPlayer);
};
export default getAnimatedSprite;
