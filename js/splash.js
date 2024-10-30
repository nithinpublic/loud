splashScreen = document.querySelector("#splash-screen")

function getRandomColor() {
    color = 50 * Math.ceil(Math.random() * 7.2);
    return String("hsl(" + color + "," + "75%,42%)");
}

noiseCharSet = "███████████████████▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░LOUD"
screenDepth = 200

function fillSplashScreen() {
    splashScreen.innerHTML = ""
    for (i = 0; i < screenDepth; i++) {
        randomChar = noiseCharSet.charAt(Math.floor((noiseCharSet.length) * (Math.random())))
        splashScreen.innerHTML += String("<span style='color:" + getRandomColor() + ";'>" + randomChar + "</span>")
    }
    if (splashScreen.style.display != "none") {
        setTimeout(() => {
            fillSplashScreen()
        }, 20);
    }
}
fillSplashScreen()

setTimeout(() => {
    splashScreen.style.display = "none"
}, 700);


