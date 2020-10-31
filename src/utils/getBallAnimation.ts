
import * as PIXI from 'pixi.js'

const getAnimatedSprite = (app, image) => {
  const i = 0
  const baseTexture = new PIXI.BaseTexture(image)
  // Render the stage
  app.renderer.render(app.stage)


  const textures = []
  const x = 0

  const myTexture = new PIXI.Texture(baseTexture)
  textures.push(myTexture)

  console.log({ textures })


  const currentPlayer = new PIXI.Sprite(myTexture)
  app.stage.addChild(currentPlayer)
  return currentPlayer
}
export default getAnimatedSprite
