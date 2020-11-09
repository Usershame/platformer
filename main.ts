namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Medkit = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Evileye = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.vy == 0) {
        Hero.vy = -180
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Medkit, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let EvileyePrime: Sprite = null
let Evileye: Sprite = null
let Flower: Sprite = null
let Medkit: Sprite = null
let Coin: Sprite = null
let Hero: Sprite = null
game.splash("Use keys (A) (W) (D)")
game.splash("Awaken warrior...")
game.splash("And save our home...")
game.splash("Be prepared...")
game.splash("And run...")
scene.setBackgroundColor(9)
info.setLife(3)
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
tiles.setTilemap(tilemap`level_2`)
Hero.ay = 350
scene.cameraFollowSprite(Hero)
for (let value of tiles.getTilesByType(myTiles.tile8)) {
    Coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 4 5 f . . 
        . . f 5 5 5 5 5 f 5 5 5 5 5 f . 
        . . f 5 4 5 5 f f f 5 5 5 5 f . 
        . . f 5 4 5 5 f 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 f f f 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 f 5 5 5 5 f . 
        . . f 5 4 5 5 f f f 5 5 5 5 f . 
        . . f 5 4 5 5 5 f 5 5 5 5 5 f . 
        . . . f 5 5 4 4 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
for (let value of tiles.getTilesByType(myTiles.tile9)) {
    Medkit = sprites.create(img`
        . . . . . f f f f f f f . . . . 
        . . . f f f 2 2 2 2 2 f f f . . 
        . . f f 2 2 2 1 1 1 2 2 2 f f . 
        . . f 2 2 2 1 1 2 1 1 2 2 2 f . 
        . f f 2 2 2 1 2 2 2 1 2 2 2 f f 
        . f 2 2 2 2 2 1 1 1 2 2 2 2 2 f 
        . f 2 2 2 2 2 2 1 2 2 2 2 2 2 f 
        . f 2 2 2 1 2 2 1 2 2 1 2 2 2 f 
        . f 2 2 1 2 1 1 1 1 1 2 1 2 2 f 
        . f 2 2 2 1 2 2 1 2 2 1 2 2 2 f 
        . f f 2 2 2 2 1 2 1 2 2 2 2 2 f 
        . . f 2 2 2 1 2 2 2 1 2 2 2 f . 
        . . f f 2 2 2 1 2 1 2 2 2 2 f . 
        . . . f f f 2 2 2 2 2 2 f f . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Medkit)
    tiles.placeOnTile(Medkit, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
for (let value of tiles.getTilesByType(myTiles.tile10)) {
    Flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a 4 4 a a . . . . . 
        . . . . . a a 4 4 a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a 7 a a . . . . . . 
        . . . 7 7 . . 7 . . . . . . . . 
        . . . . 7 7 . 7 . 7 7 . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Flower)
    tiles.placeOnTile(Flower, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
for (let value of tiles.getTilesByType(myTiles.tile13)) {
    Flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 2 2 1 1 . . . . . 
        . . . . . 1 1 2 2 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 7 1 1 . . . . . . 
        . . . 7 7 . . 7 . . . . . . . . 
        . . . . 7 7 . 7 . 7 7 . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Flower)
    tiles.placeOnTile(Flower, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
for (let value of tiles.getTilesByType(myTiles.tile11)) {
    Evileye = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 1 2 2 2 1 f . . . . . 
        . . . f 1 1 2 f 2 1 1 f . . . . 
        . . . . f 1 2 2 2 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Evileye, value)
    tiles.setTileAt(value, myTiles.transparency16)
    animation.runImageAnimation(
    Evileye,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f 1 2 2 2 1 f . . . 
        . . . . . f 1 1 2 f 2 1 1 f . . 
        . . . . . . f 1 2 2 2 1 f . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    2000,
    true
    )
}
for (let value of tiles.getTilesByType(myTiles.tile12)) {
    EvileyePrime = sprites.create(img`
        .....................................
        .....................................
        .............fffffffffff.............
        ...........fffffffffffffff...........
        ..........fffffffffffffffff..........
        .........fffffffffffffffffff.........
        ........fffffffffffffffffffff........
        .......fffffffffffffffffffffff.......
        ......fffffffffffffffffffffffff......
        ......fffffffffffffffffffffffff......
        .....ffffffffff11f1f11ffffffffff.....
        .....fffffffff1211f1121fffffffff.....
        .....fffffffff112222211fffffffff.....
        .....fffffffff1222fff21fffffffff.....
        .....fffffffff2222f2f22fffffffff.....
        .....fffffffff1222fff21fffffffff.....
        .....fffffffff112222211fffffffff.....
        .....fffffffff1211f1121fffffffff.....
        .....ffffffffff11f1f11ffffffffff.....
        .....fffffffffffffffffffffffffff.....
        .....fffffffffffffffffffffffffff.....
        ......fffffffffffffffffffffffff......
        ......fffffffffffffffffffffffff......
        .......fffffffffffffffffffffff.......
        ........fffffffffffffffffffff........
        .........fffffffffffffffffff.........
        ..........fffffffffffffffff..........
        ...........fffffffffffffff...........
        .............fffffffffff.............
        .....................................
        `, SpriteKind.Projectile)
    EvileyePrime.setPosition(Hero.x + 80, Hero.y + 80)
    EvileyePrime.follow(Hero, 50)
    tiles.placeOnTile(EvileyePrime, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
game.onUpdate(function () {
    if (Hero.vx < 0) {
        Hero.image.flipX()
    }
    Hero.setImage(img`
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
        `)
    if (Hero.vy < 0) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 1 1 1 f . . . . . . 
            . . . . . f f f f f . . f . . . 
            . . . . . f f f f f . . f . . . 
            . . f f f f f f f f f f f . . . 
            . . f . . f f f f f . . . . . . 
            . . f . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f f . . f f . . . . . . 
            . . . . f . . . f . . . . . . . 
            `)
    } else if (Hero.vy > 0) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . f . f 1 1 1 f . f . . . . 
            . . . f . f f f f f . f . . . . 
            . . . f . f f f f f . f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f f . . f f . . . . . . 
            . . . . f . . . f . . . . . . . 
            `)
    }
})
