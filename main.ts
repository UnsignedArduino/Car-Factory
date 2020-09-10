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
let InventoryListingSprite = sprites.create(img`
    . 
    `, SpriteKind.Info)
InventoryListingSprite.setPosition(scene.screenWidth() * 0.64 - 1, scene.screenHeight() * 0.88)
InventoryListingCarStatusBar = statusbars.create(60, 2, StatusBarKind.MakeTime)
InventoryListingCarStatusBar.max = 20
InventoryListingCarStatusBar.value = 0
InventoryListingCarStatusBar.setColor(7, 2, 5)
InventoryListingCarStatusBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
InventoryListingCarStatusBar.attachToSprite(InventoryListingSprite, 0, 0)
InventoryListingCarStatusBar.setLabel("Inventory", 1)
let AssemblyLineSprite = sprites.create(img`
    . 
    `, SpriteKind.Info)
AssemblyLineSprite.setPosition(scene.screenWidth() * 0.7 - 2, scene.screenHeight() * 0.95)
let AssemblyLineStatusBar = statusbars.create(60, 2, StatusBarKind.MakeTime)
AssemblyLineStatusBar.max = 100
AssemblyLineStatusBar.value = 0
AssemblyLineStatusBar.setColor(7, 2, 5)
AssemblyLineStatusBar.attachToSprite(AssemblyLineSprite, 0, 0)
AssemblyLineStatusBar.setLabel("Status", 1)
Making = false
let Overlapping = false
// 1 Mechanic: $200
// Assembly line: $3000
// Robot assistent: $750
// Robot: $2500
let AutoMakerNames = [
"Group of 4 Mechanics",
"Group of 8 Mechanics",
"Group of 12 Mechanics",
"Assembly line + 24 Mechanics",
"Assembly line + 48 Mechanics",
"8 robot-assisted assembly line + 16 Mechanics",
"12 robot-assisted assembly line + 32 Mechanics",
"32 robot-operated assembly line",
"64 robot-operated assembly line",
"128 robot-operated assembly line"
]
let AutoMakerBasePrices = [
800,
1600,
2400,
7800,
12600,
12200,
18400,
83000,
163000,
323000
]
if (false) {
    ManualMakeDelay = 200
    BuyChance = 0.1
    CostPerCar = 300
} else {
    ManualMakeDelay = 0
    BuyChance = 2
    CostPerCar = 100000
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
