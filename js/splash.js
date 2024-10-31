splashScreen = document.querySelector("#splash-screen")

function getRandomColor() {
    color = 50 * Math.ceil(Math.random() * 7.2);
    return String("hsl(" + color + "," + "75%,42%)");
}
function getRandomColorFromSet() {
    colors = ["#EAEC45", "#FF396F", "#71FFFF", "#FFFFFF", "#17172D"]
    return colors[Math.floor(colors.length*(Math.random()))]
}
console.log("dfsdf");

console.log(getRandomColorFromSet());

noiseCharSet = "███████████████████▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░LOUD"
screenDepth = 250

function fillSplashScreen() {
    splashScreen.innerHTML = ""
    for (i = 0; i < screenDepth; i++) {
        randomChar = noiseCharSet.charAt(Math.floor((noiseCharSet.length) * (Math.random())))
        splashScreen.innerHTML += String("<span style='color:" + getRandomColorFromSet() + ";'>" + randomChar + "</span>")
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


