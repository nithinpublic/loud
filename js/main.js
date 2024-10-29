console.clear()
var flushSound = new Audio('audio/flush_sound.mp3');
var errorSound = new Audio('audio/error.mp3')

// function playMusic() {
//     var music = new Audio('audio/flush_sound.mp3');
//     music.play();
// }
// function playErrorSound() {
//     var music = new Audio('audio/error.mp3')
//     music.play()
// }


textbox = document.querySelector("textarea")
flushButton = document.querySelector("#flush-button")

flushButton.addEventListener("click", () => {
    if (textbox.value) {
        flush()
        flushSound.play()
    }
    else {
        
        errorSound.play()
        flushButton.classList.add("shake")
        textbox.classList.add("flash-red")
        setTimeout(() => { 
            flushButton.classList.remove("shake")
            textbox.classList.remove("flash-red")          
        }, 300);
    }
    
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

    document.querySelector("#title-logo ").classList.add("vibrate")
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
        else {
            textbox.value = ""
            document.querySelector("#title-logo ").classList.remove("vibrate")
        }
    }
    flusher()

    
}
