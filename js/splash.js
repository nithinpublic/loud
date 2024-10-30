splashScreen = document.querySelector("#splash-screen")

function getRandomColor() {
    color = 50 * Math.ceil(Math.random() * 7.2);
    return String("hsl(" + color + "," + "80%,60%)");
}

noiseCharSet = "███████████████████▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░LOUD"
screenDepth = 200

function fillSplashScreen(){    
    splashScreen.innerHTML = ""
    for (i=0;i<screenDepth;i++){
        //splashScreen.innerHTML += noiseCharSet.charAt(Math.floor((noiseCharSet.length) * (Math.random())))
        randomChar = noiseCharSet.charAt(Math.floor((noiseCharSet.length) * (Math.random())))
        if(randomChar == "L" || randomChar == "O" || randomChar == "U" || randomChar == "D"){
            splashScreen.innerHTML +=String("<span style='color:"+"yellow"+";'>"+randomChar+"</span>")

        } else {
            splashScreen.innerHTML +=String("<span style='color:"+getRandomColor()+";'>"+randomChar+"</span>")
        }
    }
    if(splashScreen.style.display != "none"){
        setTimeout(() => {
            fillSplashScreen()
        }, 10);
    }
}
fillSplashScreen()

setTimeout(() => {
    splashScreen.style.display = "none"
}, 700);


