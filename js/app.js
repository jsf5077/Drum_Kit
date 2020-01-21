window.addEventListener('keydown', function(e){
    
    //audio variable equals to the audio div in the html that connected to a specific key press
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    //key variable equals to the key div in the html connected to the specific key press
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //checks that audio is connect to specific key presses in the console
    // console.log(audio);
    //if a key is not connected to an audio file, return
    if(!audio) {
        return;
    }
    //if key is pressed in succession, the audio file will start over
    audio.currentTime = 0;
    //plays audio file connected to the pressed key
    audio.play();
    //checks specific key is pressed in the console
    console.log(key);
    //adds the playing class to the key div
    key.classList.add("playing");
    //runs the keyUp function
    keyUp();
});

function keyUp () {window.addEventListener('keyup', function(e) {
        //key variable equals to the key div in the html connected to the specific key press
        const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
        //removes the playing class from the key div on key up
        key.classList.remove("playing");
    });
};