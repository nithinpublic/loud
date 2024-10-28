console.clear()

function playMusic() {
    var music = new Audio('audio/flush_sound.mp3');
    music.play();
}

textbox = document.querySelector("textarea")

document.querySelector("#flush-button").addEventListener("click", () => {
    flush()
    playMusic()
})

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function flush() {
    userInput = textbox.value
    waterElements = "qwertyuiopa♥♥♥sdfghjk♥♥♥lzxcvbnmQWE♥♥♥RTYUIOPASDFGHJKLZXCVBNM1234567890@#%&œþ¥øßðƒ©♥♥♥●₳"
    waterElements = "░▒▓█"
    // waterElements = "AB"

    airgapElement = "\u00a0"
    // airgapElement = "X"
    airgap = ""

    wateredText = userInput

    i = 0
    acceleration = 0
    depth = 500

    function flusher() {
        if (i < 2 * depth) {
            if (i <= wateredText.length) {
                console.log("Hi");
                

            }
            
            if (i >= userInput.length && i < depth) {
                randomCharacter = waterElements.charAt(Math.floor((waterElements.length) * (Math.random())))
                wateredText += randomCharacter
                console.log("adding random at end");

            }
            for (j = 0; j <= i; j++) {
                randomCharacter = waterElements.charAt(Math.floor((waterElements.length) * (Math.random())))
                wateredText = wateredText.replaceAt(j, randomCharacter)
                console.log("rand=", randomCharacter);
            }
            if (i >= depth) {
                // airgap += airgapElement
                airgap = ""
                for(j=0;j<=i;j++){
                    airgap +=  airgapElement
                }
            }
            i = i + 1 + acceleration
            acceleration = acceleration + 0.1
            textbox.value = airgap + wateredText
            console.log(i);

            // setTimeout(flusher, (500 / (i + 1)) + 10)
            setTimeout(flusher, 30)
        }
    }

    if (textbox.value) {
        flusher()
    }
    else {
        textbox.style.border = "#ff0000 solid 2px"
    }
}
