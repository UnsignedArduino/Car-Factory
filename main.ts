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
    if (Cursor.overlapsWith(LeftAutoMakerButton)) {
        if (AutoMakerIndex > 0) {
            AutoMakerIndex += -1
        } else {
            AutoMakerIndex = AutoMakerNames.length - 1
        }
    }
    if (Cursor.overlapsWith(RightAutoMakerButton)) {
        if (AutoMakerIndex < AutoMakerNames.length - 1) {
            AutoMakerIndex += 1
        } else {
            AutoMakerIndex = 0
        }
    }
})
function define_auto_maker_buildings () {
    // 1 Mechanic: $200
    // Assembly line: $3000
    // Robot assistant: $750
    // Robot: $2500
    AutoMakerNames = [
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
    AutoMakerPrices = [
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
}
function make_status_bar_width_height_max_value_label_sprite (width: number, height: number, max: number, value: number, label: string, sprite_to_attach: Sprite) {
    TempStatusBar = statusbars.create(width, height, StatusBarKind.MakeTime)
    TempStatusBar.max = max
    TempStatusBar.value = value
    TempStatusBar.setLabel(label, 1)
    TempStatusBar.attachToSprite(sprite_to_attach, 0, 0)
    return TempStatusBar
}
function make_manual_make_car () {
    ManualMakeCar = make_player_sprite_image_at_x_y(img`
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
        `, scene.screenWidth() * 0.125 - 1, scene.screenHeight() * 0.5)
    ManualMakeCarStatusBar = statusbars.create(20, 2, StatusBarKind.MakeTime)
    ManualMakeCarStatusBar.max = 100
    ManualMakeCarStatusBar.attachToSprite(ManualMakeCar, 0, 0)
    ManualMakeCarStatusBar.setColor(7, 2, 5)
}
function make_player_sprite_image_at_x_y (image2: Image, x: number, y: number) {
    TempSprite = sprites.create(image2, SpriteKind.Player)
    TempSprite.setPosition(x, y)
    return TempSprite
}
let TempSprite: Sprite = null
let TempStatusBar: StatusBarSprite = null
let AutoMakerPrices: number[] = []
let AutoMakerNames: string[] = []
let ManualMakeCar: Sprite = null
let ManualMakeCarStatusBar: StatusBarSprite = null
let CostPerCar = 0
let BuyChance = 0
let ManualMakeDelay = 0
let AutoMakerIndex = 0
let Making = false
let RightAutoMakerButton: Sprite = null
let LeftAutoMakerButton: Sprite = null
let InventoryListingCarStatusBar: StatusBarSprite = null
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
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666bbbbbbbbbbbfbbbbccfbbbddbfbbbbbbf2feeeeffbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb69666666c6bbbccbbbbbfbbbccbfbbbddbfbbbbbf222feeeeffbbbbbbbbbbbbbbbbbb
    bbbbffffbbbbffbbbbffffffbbbbbbbbffffbbbbffbbbbbbffffbbffffffbbbbffbbbbffffffbbffbbffbbbbbb6c9666666cc6bbbbcbbffbbbbccbfbbbddffbbbbbfeeeeffeeefbbbbbbbbbbbbbbbbbb
    bbbbffffbbbbffbbbbffffffbbbbbbbbffffbbbbffbbbbbbffffbbffffffbbbbffbbbbffffffbbffbbffbbbbb6cc9999996cc96dbbffffbbbbccbbfbbbbdfbbbbbfe2222eeffffbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbffbbffbbbbb6c68888888bc966bbffcbbbbccbbbfbbbbfdbbbbbf2effff222efbbbbbbbbbbbbbbbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbffbbffbbbbb668bb8bbb88b966bbcbcccbccbbbfffbbbfdbbbbbfffeeefffffffbbbbbbbbbbfbbbbbb
    bbffbbbbbbffffffbbffffbbbbbbbbffffffbbffffffbbffbbbbbbbbffbbbbffbbffbbffffbbbbbbffbbbbbbb68bbb8bbbb86666bcbbbcccffbbbfbfbbfbddbbbbfee44fbe44effbbbbbbbbbfffbbbbb
    bbffbbbbbbffffffbbffffbbbbbbbbffffffbbffffffbbffbbbbbbbbffbbbbffbbffbbffffbbbbbbffbbbbbbb886668666668666bbbbbbbcfffbffbbffbbddbbbbbfeddf14d4eefbbbbdbdbbbfffbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbbbffbbbbbbb888888f888f86ddbbbaabbbbbbfbbbbbfbbbddbbbbbfdddeeeeefbbbbbbdbbbcbffbbbb
    bbffbbbbbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbffbbbbbbbbffbbbbffbbffbbffbbffbbbbffbbbbbbb888888f88f8886dbbabbabbbbbbbdddffdddffbbbbbfe4edd4fbbbbbbbccdcccccbbbbb
    bbbbffffbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbbbffffbbbbffbbbbbbffbbbbffbbffbbbbffbbbbbbb888888fff888888bbbbbffddddddddffffddffbbbbbf22eddefbbbbbbbcbdbcbbcbbbbb
    bbbbffffbbffbbffbbffbbffbbbbbbffbbbbbbffbbffbbbbffffbbbbffbbbbbbffbbbbffbbffbbbbffbbbbbbb8ffff8888fff888bbbbbfffdddddbffbbfbbffbbbbff55feefffbbbbbccccccccccbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff88fffff8bbbabbabffbbbfffbbbbffbbbbbbffffffffffbbbbbccccccccccbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbffffbbbbbaabbbfffffbbbbbbbbbbbbbbbfffbbbffbbbbbbccccccccccbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbccccccccccbbbb
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
make_manual_make_car()
let InventoryListingSprite = sprites.create(img`
    . 
    `, SpriteKind.Info)
InventoryListingSprite.setPosition(scene.screenWidth() * 0.64 - 1, scene.screenHeight() * 0.88)
InventoryListingCarStatusBar = make_status_bar_width_height_max_value_label_sprite(60, 2, 20, 0, "Inventory", InventoryListingSprite)
InventoryListingCarStatusBar.setColor(7, 2, 5)
InventoryListingCarStatusBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
let AssemblyLineSprite = sprites.create(img`
    . 
    `, SpriteKind.Info)
AssemblyLineSprite.setPosition(scene.screenWidth() * 0.7 - 2, scene.screenHeight() * 0.95)
let AssemblyLineStatusBar = make_status_bar_width_height_max_value_label_sprite(60, 2, 100, 0, "Status", AssemblyLineSprite)
AssemblyLineStatusBar.setColor(7, 2, 5)
LeftAutoMakerButton = make_player_sprite_image_at_x_y(img`
    b b b b b b b b b b b b b b b b 
    b d d d d d d d d d d d d d d b 
    b d d d d b d d d d d d d d d b 
    b d d d b b d d d d d d d d d b 
    b d d b b b d d d d d d d d d b 
    b d b b b b b b b b b b b b d b 
    b d b b b b b b b b b b b b d b 
    b d d b b b d d d d d d d d d b 
    b d d d b b d d d d d d d d d b 
    b d d d d b d d d d d d d d d b 
    b d d d d d d d d d d d d d d b 
    b b b b b b b b b b b b b b b b 
    `, scene.screenWidth() * 0.5 - 3, scene.screenHeight() * 0.35)
let AutoMakerBuyButton = make_player_sprite_image_at_x_y(img`
    b b b b b b b b b b b b b b b b 
    b d d d d d d d d d d d d d d b 
    b d d d d d d d d d d d d d d b 
    b d b b d d d d d d d d d d d b 
    b d b d b d d d d d d d d d d b 
    b d b b d d b d b d d b d b d b 
    b d b d b d b d b d d b d b d b 
    b d b b d d d b d d d d b b d b 
    b d d d d d d d d d b d d b d b 
    b d d d d d d d d d d b b b d b 
    b d d d d d d d d d d d d d d b 
    b b b b b b b b b b b b b b b b 
    `, scene.screenWidth() * 0.65 - 3, scene.screenHeight() * 0.35)
RightAutoMakerButton = make_player_sprite_image_at_x_y(img`
    b b b b b b b b b b b b b b b b 
    b d d d d d d d d d d d d d d b 
    b d d d d d d d d d b d d d d b 
    b d d d d d d d d d b b d d d b 
    b d d d d d d d d d b b b d d b 
    b d b b b b b b b b b b b b d b 
    b d b b b b b b b b b b b b d b 
    b d d d d d d d d d b b b d d b 
    b d d d d d d d d d b b d d d b 
    b d d d d d d d d d b d d d d b 
    b d d d d d d d d d d d d d d b 
    b b b b b b b b b b b b b b b b 
    `, scene.screenWidth() * 0.8 - 3, scene.screenHeight() * 0.35)
Making = false
let Overlapping = false
AutoMakerIndex = 0
let LastAutoMakerIndex = -1
define_auto_maker_buildings()
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
    if (Cursor.overlapsWith(LeftAutoMakerButton)) {
        LeftAutoMakerButton.setImage(img`
            a a a a a a a a a a a a a a a a 
            a b b b b b b b b b b b b b b a 
            a b b b b a b b b b b b b b b a 
            a b b b a a b b b b b b b b b a 
            a b b a a a b b b b b b b b b a 
            a b a a a a a a a a a a a a b a 
            a b a a a a a a a a a a a a b a 
            a b b a a a b b b b b b b b b a 
            a b b b a a b b b b b b b b b a 
            a b b b b a b b b b b b b b b a 
            a b b b b b b b b b b b b b b a 
            a a a a a a a a a a a a a a a a 
            `)
    } else {
        LeftAutoMakerButton.setImage(img`
            b b b b b b b b b b b b b b b b 
            b d d d d d d d d d d d d d d b 
            b d d d d b d d d d d d d d d b 
            b d d d b b d d d d d d d d d b 
            b d d b b b d d d d d d d d d b 
            b d b b b b b b b b b b b b d b 
            b d b b b b b b b b b b b b d b 
            b d d b b b d d d d d d d d d b 
            b d d d b b d d d d d d d d d b 
            b d d d d b d d d d d d d d d b 
            b d d d d d d d d d d d d d d b 
            b b b b b b b b b b b b b b b b 
            `)
    }
    if (Cursor.overlapsWith(AutoMakerBuyButton)) {
        AutoMakerBuyButton.setImage(img`
            a a a a a a a a a a a a a a a a 
            a b b b b b b b b b b b b b b a 
            a b b b b b b b b b b b b b b a 
            a b a a b b b b b b b b b b b a 
            a b a b a b b b b b b b b b b a 
            a b a a b b a b a b b a b a b a 
            a b a b a b a b a b b a b a b a 
            a b a a b b b a b b b b a a b a 
            a b b b b b b b b b a b b a b a 
            a b b b b b b b b b b a a a b a 
            a b b b b b b b b b b b b b b a 
            a a a a a a a a a a a a a a a a 
            `)
    } else {
        AutoMakerBuyButton.setImage(img`
            b b b b b b b b b b b b b b b b 
            b d d d d d d d d d d d d d d b 
            b d d d d d d d d d d d d d d b 
            b d b b d d d d d d d d d d d b 
            b d b d b d d d d d d d d d d b 
            b d b b d d b d b d d b d b d b 
            b d b d b d b d b d d b d b d b 
            b d b b d d d b d d d d b b d b 
            b d d d d d d d d d b d d b d b 
            b d d d d d d d d d d b b b d b 
            b d d d d d d d d d d d d d d b 
            b b b b b b b b b b b b b b b b 
            `)
    }
    if (Cursor.overlapsWith(RightAutoMakerButton)) {
        RightAutoMakerButton.setImage(img`
            a a a a a a a a a a a a a a a a 
            a b b b b b b b b b b b b b b a 
            a b b b b b b b b b a b b b b a 
            a b b b b b b b b b a a b b b a 
            a b b b b b b b b b a a a b b a 
            a b a a a a a a a a a a a a b a 
            a b a a a a a a a a a a a a b a 
            a b b b b b b b b b a a a b b a 
            a b b b b b b b b b a a b b b a 
            a b b b b b b b b b a b b b b a 
            a b b b b b b b b b b b b b b a 
            a a a a a a a a a a a a a a a a 
            `)
    } else {
        RightAutoMakerButton.setImage(img`
            b b b b b b b b b b b b b b b b 
            b d d d d d d d d d d d d d d b 
            b d d d d d d d d d b d d d d b 
            b d d d d d d d d d b b d d d b 
            b d d d d d d d d d b b b d d b 
            b d b b b b b b b b b b b b d b 
            b d b b b b b b b b b b b b d b 
            b d d d d d d d d d b b b d d b 
            b d d d d d d d d d b b d d d b 
            b d d d d d d d d d b d d d d b 
            b d d d d d d d d d d d d d d b 
            b b b b b b b b b b b b b b b b 
            `)
    }
})
game.onUpdate(function () {
    if (!(AutoMakerIndex == LastAutoMakerIndex)) {
        AutoMakerBuyButton.say("" + AutoMakerNames[AutoMakerIndex] + " for $" + AutoMakerPrices[AutoMakerIndex])
        LastAutoMakerIndex = AutoMakerIndex
    }
})
