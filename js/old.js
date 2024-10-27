function flushOld2() {
    userInput = textbox.value
    waterElements = "qwertyuiopa♥♥♥sdfghjk♥♥♥lzxcvbnmQWE♥♥♥RTYUIOPASDFGHJKLZXCVBNM1234567890@#%&œþ¥øßðƒ©♥♥♥●₳"

    wateredText = userInput

    i = 0
    acceleration = 0
    depth = 500

    function thoughtReplacer() {
        if (i < wateredText.length) {
            for (j = 0; j <= i; j++) {
                randomCharacter = waterElements.charAt(Math.floor((waterElements.length) * (Math.random())))
                wateredText = wateredText.replaceAt(j, randomCharacter)
            }
            i = i + 1 + acceleration
            acceleration = acceleration + 0.1
            textbox.value = wateredText
            setTimeout(thoughtReplacer, (300 / (i + 1)) + 10)
        } else {
            console.log("done");
            if (i < depth) {
                randomCharacter = waterElements.charAt(Math.floor((waterElements.length) * (Math.random())))
                wateredText += randomCharacter
                thoughtReplacer()
            }
        }
    }
    thoughtReplacer()
}



var c = 0
function flushOld() {
    delay = 1
    waterElements = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#%^&œþ¥øßðƒ©"

    userInput = textbox.value


    airgapLength = 200
    function animateFlush() {
        airgap = ""
        water = ""

        for (let i = 0; i < airgapLength; i++) {
            airgap += "\u00a0"
        }
        for (let i = 0; i < 400; i++) {
            water += waterElements.charAt(Math.ceil((waterElements.length) * (Math.random())))
        }

        if (c < 10) {
            textbox.value = userInput + airgap + water
            c += 1
            airgapLength -= 1
            setTimeout(animateFlush, delay);
        }
    }
    animateFlush()
}

function flushWithoutAirgap() {
    userInput = textbox.value
    waterElements = "qwertyuiopa♥♥♥sdfghjk♥♥♥lzxcvbnmQWE♥♥♥RTYUIOPASDFGHJKLZXCVBNM1234567890@#%&œþ¥øßðƒ©♥♥♥●₳"
    waterElements = "░▒▓█"

    wateredText = userInput

    i = 0
    acceleration = 0
    depth = 500

    function thoughtReplacer() {
        if (i < depth) {
            for (j = 0; j <= i; j++) {
                randomCharacter = waterElements.charAt(Math.floor((waterElements.length) * (Math.random())))
                wateredText = wateredText.replaceAt(j, randomCharacter)
                
            }
            if (i >= userInput.length) {
                wateredText += randomCharacter
            }
            i = i + 1 + acceleration
            acceleration = acceleration + 0.1
            textbox.value = wateredText
            setTimeout(thoughtReplacer, (300 / (i + 1)) + 10)
        } else {
            console.log("done");
        }
    }
    thoughtReplacer()
}