namespace SpriteKind {
    export const Info = SpriteKind.create()
}
namespace StatusBarKind {
    export const MakeTime = StatusBarKind.create()
}
function manually_make_car () {
    Making = true
    timer.background(function () {
        if (InventoryListingCarStatusBar.value < InventoryListingCarStatusBar.max) {
            ManualMakeCarStatusBar.value = 0
            for (let Number2 = 0; Number2 <= 100; Number2++) {
                ManualMakeCarStatusBar.value += 1
                pause(ManualMakeDelay)
            }
            InventoryListingCarStatusBar.value += 1
        }
        Making = false
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cursor.overlapsWith(ManualMakeCar)) {
        if (!(Making)) {
            manually_make_car()
        }
    }
})
let CostPerCar = 0
let BuyChance = 0
let ManualMakeDelay = 0
let Making = false
let InventoryListingCarStatusBar: StatusBarSprite = null
let ManualMakeCarStatusBar: StatusBarSprite = null
let ManualMakeCar: Sprite = null
let Cursor: Sprite = null
Cursor = sprites.create(img`
    f f . . . . 
    f 1 f . . . 
    f 1 1 f . . 
    f 1 1 1 f . 
    f 1 1 1 1 f 
    f 1 1 1 f . 
    f 1 f 1 f . 
    . f . f 1 f 
    . . . f 1 f 
    . . . . f . 
    `, SpriteKind.Player)
Cursor.setFlag(SpriteFlag.StayInScreen, true)
Cursor.setFlag(SpriteFlag.ShowPhysics, false)
controller.moveSprite(Cursor, 96, 96)
Cursor.z = 100
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666bbbbbbbbbbbfbbbbccfbbbddbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb69666666c6bbbccbbbbbfbbbccbfbbbddbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbffffbbbbffbbbbffffffbbbbbbbbffffbbbbffbbbbbbffffbbffffffbbbbffbbbbffffffbbffbbffbbbbbb6c9666666cc6bbbbcbbffbbbbccbfbbbddffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbffffbbbbffbbbbffffffbbbbbbbbffffbbbbffbbbbbbffffbbffffffbbbbffbbbbffffffbbffbbffbbbbb6cc9999996cc96dbbffffbbbbccbbfbbbbdfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbffbbffbbbbb6c68888888bc966bbffcbbbbccbbbfbbbbfdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbffbbffbbbbb668bb8bbb88b966bbcbcccbccbbbfffbbbfdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffffffbbffffbbbbbbbbffffffbbffffffbbffbbbbbbbbffbbbbffbbffbbffffbbbbbbffbbbbbbb68bbb8bbbb86666bcbbbcccffbbbfbfbbfbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffffffbbffffbbbbbbbbffffffbbffffffbbffbbbbbbbbffbbbbffbbffbbffffbbbbbbffbbbbbbb886668666668666bbbbbbbcfffbffbbffbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbbbffbbbbbbb888888f888f86ddbbbaabbbbbbfbbbbbfbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbbbffbbbbbbb888888f88f8886dbbabbabbbbbbbdddffdddffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbffffbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbbbffffbbbbffbbbbbbffbbbbffbbffbbbbffbbbbbbb888888fff888888bbbbbffddddddddffffddffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbffffbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbbbffffbbbbffbbbbbbffbbbbffbbffbbbbffbbbbbbb8ffff8888fff888bbbbbfffdddddbffbbfbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff88fffff8bbbabbabffbbbfffbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbffffbbbbbaabbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff......................................................................................................................
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    dddd55555ddddddd55555ddddddd55555ddddddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddd55555ddddddd55555ddddddd55555dddddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddd55555ddddddd55555ddddddd55555ddddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddd55555ddddddd55555ddddddd55555dddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    5ddddddd55555ddddddd55555ddddddd55555ddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    55ddddddd55555ddddddd55555ddddddd55555dfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    555ddddddd55555ddddddd55555ddddddd55555fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    5555ddddddd55555ddddddd55555ddddddd5555fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    55555ddddddd55555ddddddd55555ddddddd555fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    d55555ddddddd55555ddddddd55555ddddddd55fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dd55555ddddddd55555ddddddd55555ddddddd5fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddd55555ddddddd55555ddddddd55555dddddddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddd55555ddddddd55555ddddddd55555ddddddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddd55555ddddddd55555ddddddd55555dddddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddd55555ddddddd55555ddddddd55555ddddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddd55555ddddddd55555ddddddd55555dddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    5ddddddd55555ddddddd55555ddddddd55555ddfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    55ddddddd55555ddddddd55555ddddddd55555dfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    555ddddddd55555ddddddd55555ddddddd55555fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    5555ddddddd55555ddddddd55555ddddddd5555fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    55555ddddddd55555ddddddd55555ddddddd555fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    d5555dddddddd55555ddddddd55555ddddddd55fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scene.setBackgroundColor(12)
ManualMakeCar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ManualMakeCar.setPosition(scene.screenWidth() * 0.125 - 1, scene.screenHeight() * 0.5)
ManualMakeCarStatusBar = statusbars.create(20, 2, StatusBarKind.MakeTime)
ManualMakeCarStatusBar.max = 100
ManualMakeCarStatusBar.attachToSprite(ManualMakeCar, 0, 0)
ManualMakeCarStatusBar.setColor(7, 2, 5)
let InventoryListingCar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Info)
InventoryListingCar.setPosition(scene.screenWidth() * 0.6 - 1, scene.screenHeight() * 0.94)
InventoryListingCarStatusBar = statusbars.create(50, 2, StatusBarKind.MakeTime)
InventoryListingCarStatusBar.max = 20
InventoryListingCarStatusBar.value = 0
InventoryListingCarStatusBar.setColor(7, 2, 5)
InventoryListingCarStatusBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
InventoryListingCarStatusBar.attachToSprite(InventoryListingCar, 0, 0)
InventoryListingCarStatusBar.setLabel("Storage", 1)
Making = false
let Overlapping = false
if (false) {
    ManualMakeDelay = 200
} else {
    ManualMakeDelay = 0
}
if (false) {
    BuyChance = 0.1
} else {
    BuyChance = 2.5
}
if (false) {
    CostPerCar = 300
} else {
    CostPerCar = 1000
}
info.setScore(0)
game.onUpdate(function () {
    if (Math.percentChance(BuyChance) && InventoryListingCarStatusBar.value > 0) {
        InventoryListingCarStatusBar.value += -1
        info.changeScoreBy(CostPerCar)
    }
})
game.onUpdate(function () {
    Overlapping = false
    for (let Sprite2 of sprites.allOfKind(SpriteKind.Player)) {
        if (Cursor.overlapsWith(Sprite2)) {
            Overlapping = true
        }
    }
    if (Overlapping) {
        Cursor.setImage(img`
            . . . . f . . . . . . . 
            . . . f 1 f . . . . . . 
            . . . f 1 f . . . . . . 
            . . . f 1 f f f f . . . 
            . . . f 1 f 1 1 1 f . . 
            . f . f 1 1 1 1 1 1 f . 
            f 1 f f 1 1 1 1 1 1 f . 
            f 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f . 
            . . f 1 1 1 1 1 1 1 f . 
            . . . f 1 1 1 1 1 f . . 
            . . . . f f f f f . . . 
            `)
    } else {
        Cursor.setImage(img`
            . . . . f f . . . . 
            . . . . f 1 f . . . 
            . . . . f 1 1 f . . 
            . . . . f 1 1 1 f . 
            . . . . f 1 1 1 1 f 
            . . . . f 1 1 1 f . 
            . . . . f 1 f 1 f . 
            . . . . . f . f 1 f 
            . . . . . . . f 1 f 
            . . . . . . . . f . 
            `)
    }
})
