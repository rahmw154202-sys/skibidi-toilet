input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("wafi was here")
})
music.play(music.stringPlayable("C5 B A G F E D C ", 500), music.PlaybackMode.UntilDone)
