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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Boost()
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
    let mySprite: Sprite = null
    mySprite.destroy()
    game.over(false)
    game.splash("OH DEAR! YOU RAN OUT OF LIVES AND DIED. PRESS A TO CONTINUE")
})
function Boost () {
    BoostEval = 1
    game.splash("BOOST")
    music.playMelody("C5 F C5 G C5 F C5 G ", 300)
    pause(5000)
    music.stopAllSounds()
    BoostEval = 0
}
let BoostEval = 0
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
Character.setPosition(22, 107)
controller.moveSprite(Character, 100, 0)
Character.setFlag(SpriteFlag.StayInScreen, true)
