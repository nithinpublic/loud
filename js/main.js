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


var c = 0
function flush() {
    delay = 1
    waterElements = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#%^&œþ¥øßðƒ©"

    thoughts = textbox.value


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

        if (airgapLength >= 0) {
            textbox.value = thoughts + airgap + water
            c += 1
            airgapLength -= 1
            setTimeout(animateFlush, delay);
        }
    }
    animateFlush()
}

