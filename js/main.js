function playMusic(){
    var music = new Audio('/audio/flush_sound.mp3');
    music.play();
    }



document.querySelector("#flush-button").addEventListener("click", ()=>{
    document.querySelector("textarea").value = ""
    playMusic()
    
})