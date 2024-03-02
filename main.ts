let set_hand_to = 0
input.onGesture(Gesture.Shake, function () {
    set_hand_to = randint(1, 3)
    if (set_hand_to == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else if (set_hand_to == 2) {
        basic.showLeds(`
            # . # . #
            # # . # #
            # . # . #
            . . # . .
            . . # . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else {
    	
    }
})
