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
function flushOld() {
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

        if (c < 10) {
            textbox.value = thoughts + airgap + water
            c += 1
            airgapLength -= 1
            setTimeout(animateFlush, delay);
        }
    }
    animateFlush()
}


String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
function flush() {
    thoughts = textbox.value
    waterElements = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#%&œþ¥øßðƒ©♥♥♥●₳"

    wateredText = thoughts

    i = 0
    acceleration = 0
    function thoughtReplacer(){
        
        
        if (i < wateredText.length){
            for(j=0;j<=i;j++){
                randomCharacter = waterElements.charAt(Math.ceil((waterElements.length) * (Math.random())))
                wateredText = wateredText.replaceAt(j,randomCharacter)
            }
            
            i= i + 1 + acceleration
            acceleration = acceleration + 0.1
            textbox.value = wateredText
            setTimeout(thoughtReplacer, (300/(i+1))+10)

        } else {
            console.log("done");
            if (i < 500) {
                randomCharacter = waterElements.charAt(Math.ceil((waterElements.length) * (Math.random())))
                wateredText += randomCharacter
                thoughtReplacer()

            }
            
        }
    }
    thoughtReplacer()



  
    
   
}
