window.addEventListener('keydown', function(e){
    
    //audio variable equals to the audio div in the html that connected to a specific key press
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    //checks that audio is connect to specific key presses in the console
    console.log(audio);
    //if a key is not connected to an audio file, return
    if(!audio) {
        return;
    }
    //plays audio file connected to the pressed key
    audio.play();
})