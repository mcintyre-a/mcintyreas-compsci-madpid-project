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
game.showLongText("SO YOU WANT TO WIN THE MAZE OF ETERNITY? DO YOU HAVE WHAT IT TAKES?", DialogLayout.Center)
game.showLongText("USE THE ARROWS/JOYSTICK TO MOVE YOUR SPRITE. PRESS A TO JUMP OVER PAST AN OBSTACLE AND MOVE 2 SPACES. PRESS B TO PAUSE THE GAME. READY?", DialogLayout.Center)
