scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.vy == 0) {
        Hero.vy = -110
    }
})
let Hero: Sprite = null
scene.setBackgroundColor(9)
Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 1 1 1 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f . f f f f f . f . . . . 
    . . . f . f f f f f . f . . . . 
    . . . f . f f f f f . f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hero, 100, 100)
tiles.setTilemap(tilemap`level_1`)
Hero.ay = 350;
scene.cameraFollowSprite(Hero)
