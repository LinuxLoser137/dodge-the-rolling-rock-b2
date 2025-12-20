# Dodge the Falling Rock

## Beginner Game 2

//Create a sprite and name it rock/ set to null
 ```blocks
let rock: Sprite = null
```
//Add a backgroung
```blocks
let rock: Sprite = null
scene.setBackgroundColor(1)
```
//Create the second sprite and label it a player
```blocks
let rock: Sprite = null
scene.setBackgroundColor(1)
let player2 = sprites.create(assets.image`dodger`, SpriteKind.Player)
```
//Add controls for the sprite
```blocks
let rock: Sprite = null
scene.setBackgroundColor(1)
let player2 = sprites.create(assets.image`dodger`, SpriteKind.Player)
controller.moveSprite(player2, 120, 0)
```
//Set the sprite to stay on the screen
```blocks
let rock: Sprite = null
scene.setBackgroundColor(1)
let player2 = sprites.create(assets.image`dodger`, SpriteKind.Player)
controller.moveSprite(player2, 120, 0)
player2.setFlag(SpriteFlag.StayInScreen, true)
```
//Set Life counter to 3
```blocks
player2.y = 110
let rock: Sprite = null
scene.setBackgroundColor(1)
let player2 = sprites.create(assets.image`dodger`, SpriteKind.Player)
controller.moveSprite(player2, 120, 0)
player2.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
```
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (p, e) {
    e.destroy(effects.disintegrate, 200)
    info.changeLifeBy(-1)
    pause(200)
    if (info.life() <= 0) {
        game.over(false, effects.melt)
    }
})
```

// <-- This creates the enemy/rock sprite
```blocks
game.onUpdateInterval(800, function () {
    rock = sprites.create(assets.image`rock`, SpriteKind.Enemy)
    rock.x = randint(10, 150)
    rock.y = 0
    rock.vy = randint(30, 70)
    rock.setFlag(SpriteFlag.AutoDestroy, true)
})
```
