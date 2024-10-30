splashScreen = document.querySelector("#splash-screen")





noiseCharSet = "░▒▓█"
screenDepth = 2000

function fillSplashScreen(){
    console.log("Still here");
    
    splashScreen.innerHTML = ""
    for (i=0;i<screenDepth;i++){
        splashScreen.innerHTML += noiseCharSet.charAt(Math.floor((noiseCharSet.length) * (Math.random())))
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
}, 500);


