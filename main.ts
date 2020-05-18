namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function MakeFOOD () {
    AccFood = sprites.createProjectileFromSide(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, Math.randomRange(0, 100), Math.randomRange(0, 100))
    AccFood.setKind(SpriteKind.Food)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 < Foodstuff) {
        Boost()
        Foodstuff += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Foodstuff += 1
    AccFood.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (1 == BoostEval) {
        info.changeScoreBy(10)
        info.changeLifeBy(1)
    } else {
        Character.startEffect(effects.spray)
        info.changeLifeBy(-1)
    }
})
info.onLifeZero(function () {
    Character.destroy()
    game.splash("OH DEAR! YOU RAN OUT OF LIVES AND DIED. PRESS A TO CONTINUE")
    game.reset()
})
function Boost () {
    BoostEval = 1
    game.splash("BOOST")
    scene.cameraShake(4, 2000)
    pause(5000)
    music.stopAllSounds()
    BoostEval = 0
    music.playMelody("C5 F C5 G C5 F C5 G ", 300)
}
let AccFood: Sprite = null
let BoostEval = 0
let Foodstuff = 0
let Character: Sprite = null
scene.setBackgroundColor(8)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000c08080808080808080808080808080d0f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110f0a0a0a0a0a0a0a0a0a0a0a0a0a0a110e0a0a0a0a0a0a0a0a0a0a0a0a0a0a07`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.rock2,sprites.castle.rock0,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2,sprites.builtin.forestTiles12,sprites.builtin.forestTiles15,sprites.builtin.forestTiles6,sprites.builtin.forestTiles14,sprites.builtin.forestTiles10,sprites.builtin.forestTiles22,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles13,sprites.builtin.forestTiles9,sprites.builtin.forestTiles18,sprites.builtin.forestTiles11],
            TileScale.Sixteen
        ))
game.splash("WELCOME")
game.setDialogTextColor(7)
game.showLongText("SO YOU WANT TO WIN ? DO YOU HAVE WHAT IT TAKES?", DialogLayout.Center)
game.showLongText("USE THE ARROWS/JOYSTICK TO MOVE YOUR SPRITE LEFT/RIGHT. PRESS B TO BOOST IF YOU HAVE FOOD. READY?", DialogLayout.Center)
Character = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f f f f f 4 4 4 4 f f f f f f 
f f f f f f 4 f f 4 f f f f f f 
f f f f f f 4 f f 4 f f f f f f 
f f f f f 7 4 4 4 4 7 f f f f f 
f f f f f 7 7 7 7 7 7 f f f f f 
f f f 7 7 7 7 7 7 7 7 7 7 f f f 
f f 2 2 2 7 7 7 7 7 7 2 2 2 f f 
f f 2 2 2 7 7 7 7 7 7 2 2 2 f f 
f f 2 2 2 7 7 7 7 7 7 2 2 2 f f 
f f f f f 7 7 7 7 7 7 f f f f f 
f f f f f 7 7 7 7 7 7 f f f f f 
f f f f f 5 5 f f 5 5 f f f f f 
f f f f f 5 5 f f 5 5 f f f f f 
f f f f f 5 5 f f 5 5 f f f f f 
f f f f f 5 5 f f 5 5 f f f f f 
`, SpriteKind.Player)
info.setScore(0)
info.setLife(3)
Foodstuff = 0
Character.setPosition(22, 107)
controller.moveSprite(Character, 100, 0)
Character.setFlag(SpriteFlag.StayInScreen, true)
while (BoostEval == 0 && info.life() > 0) {
    MakeFOOD()
    pause(5000)
}
