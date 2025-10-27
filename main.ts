/**
 * To Do List
 * 
 * 1) Create your player sprite (dodger)
 * 
 * 2) Create your enemy sprite (rock)
 * 
 * 3) Add movement
 * 
 * 4) Set up game environment
 * 
 * 5) Let the player move left or right
 * 
 * 6) Add background or color
 * 
 * 7) Make rocks fall every few seconds
 * 
 * 8) Make the player lose a life when hit
 * 
 * 9) Make adjustments where you want.
 */
/**
 * <--- This piece of code creates the player/ dodger sprite.
 */
/**
 * <-- This controls what the rock does.
 */
/**
 * <-- This controls what happens when the rock hits the dodger
 */
/**
 * <-- This ends the game
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (p, e) {
    e.destroy(effects.disintegrate, 200)
    info.changeLifeBy(-1)
    pause(200)
    if (info.life() <= 0) {
        game.over(false, effects.melt)
    }
})
/**
 * <-- This controls what happens when you hit buttons
 */
/**
 * <-- This helps the player/dodger stay on the screen
 */
/**
 * <-- This sets a life counter
 */
let rock: Sprite = null
// Dodge the Rolling Rock - Beginner 2
scene.setBackgroundColor(1)
let player2 = sprites.create(assets.image`dodger`, SpriteKind.Player)
controller.moveSprite(player2, 120, 0)
player2.setFlag(SpriteFlag.StayInScreen, true)
// Position the dodger closer to the bottom of the screen
player2.y = 110
info.setLife(3)
/**
 * <-- This creates the enemy/rock sprite
 */
game.onUpdateInterval(800, function () {
    rock = sprites.create(assets.image`rock`, SpriteKind.Enemy)
    rock.x = randint(10, 150)
    rock.y = 0
    rock.vy = randint(30, 70)
    rock.setFlag(SpriteFlag.AutoDestroy, true)
})
