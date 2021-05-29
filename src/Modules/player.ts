
import {SpriteManager, Sprite, ActionManager, ExecuteCodeAction, Vector3} from "@babylonjs/core"



const defaultMovement = (player: Sprite) => () => {
    player.playAnimation(0, 3, true, 100, null)
}
const attack = (direction, player: Sprite) => {
    if(direction === 'f'){
        player.playAnimation(42, 45, false, 100, defaultMovement(player))
        // player.stopAnimation()
    }
    // } else if(direction === 's'){
    //     player.position = new Vector3(player.position.x, player.position.y -1)
    // }else if(direction === 'd'){
    //     player.position = new Vector3(player.position.x+1, player.position.y)
    // }else if(direction === 'a'){
    //     player.position = new Vector3(player.position.x-1, player.position.y)
    // }

}


const move = (direction, player: Sprite) => {
    if(direction === 'w'){
        player.position = new Vector3(player.position.x, player.position.y + 1)
    } else if(direction === 's'){
        player.position = new Vector3(player.position.x, player.position.y -1)
    }else if(direction === 'd'){
        player.position = new Vector3(player.position.x+1, player.position.y)
    }else if(direction === 'a'){
        player.position = new Vector3(player.position.x-1, player.position.y)
    }
}


export default function player (scene) {

const playerFile = require("../Assets/adventurer-Sheet.png")

var playerManager = new SpriteManager("playerManager", playerFile, 1, {width: 50, height: 37}, scene);


scene.actionManager = new ActionManager(scene)

var player = new Sprite('player', playerManager)

scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, (evt) => {
    if(['w','s','d','a'].includes(evt.sourceEvent.key)){
        move(evt.sourceEvent.key, player)
    }else {
        attack(evt.sourceEvent.key, player)
    }
}));

player.size = 1
//@ts-ignore
player.invertU = -1
player.width = 1
player.height = 1
defaultMovement(player)()
}
