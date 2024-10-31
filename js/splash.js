splashScreen = document.querySelector("#splash-screen")

function getRandomColor() {
    color = 50 * Math.ceil(Math.random() * 7.2);
    return String("hsl(" + color + "," + "75%,42%)");
}
function getRandomColorFromSet() {
    colors = ["#EAEC45", "#FF396F", "#71FFFF", "#C5FF1D", "#FFFFFF", "#17172D"]
    return colors[Math.floor(colors.length*(Math.random()))]
}
console.log("dfsdf");

console.log(getRandomColorFromSet());

noiseCharSet = "███████████████████▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░LOUD"
screenDepth = 200

dissipate = false

setTimeout(() => {
    dissipate = true
}, 300);

setTimeout(() => {
    splashScreen.style.display = "none"
}, 700);

function fillSplashScreen() {
    splashScreen.innerHTML = ""
    for (i = 0; i < screenDepth; i++) {
        randomChar = noiseCharSet.charAt(Math.floor((noiseCharSet.length) * (Math.random())))
        splashScreen.innerHTML += String("<span style='color:" + getRandomColorFromSet() + ";'>" + randomChar + "</span>")
        
    }
    if (splashScreen.style.display != "none") {
        setTimeout(() => {
            if (dissipate) {
                screenDepth = Math.floor(screenDepth/2)
                console.log(screenDepth);
                
                //splashScreen.style.fontSize = String(screenDepth+"px")
                // splashScreen.style.top = "24px"
                // splashScreen.style.translate = "-50% 0px"
            }
            fillSplashScreen()
        }, 40);
    }
    
}
fillSplashScreen()




