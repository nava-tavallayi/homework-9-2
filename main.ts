namespace SpriteKind {
    export const CPU = SpriteKind.create()
}
function Shoot_Bullet () {
    Bullet = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 100)
    Bullet.setPosition(Jet.x + 10, Jet.y + 4)
}
let Jet: Sprite = null
let Bullet: Sprite = null
scene.setBackgroundImage(assets.image`Sky`)
game.onUpdateInterval(1000, function () {
    Jet = sprites.create(assets.image`Jet Plane`, SpriteKind.CPU)
    Jet.setPosition(randint(15, 145), -20)
    Jet.vy += 30
})
game.onUpdateInterval(500, function () {
    Shoot_Bullet()
})
