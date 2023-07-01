
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    keys.classList.add('playing');
    
});
function removeTransition(e){
    if(e.propertyName!=='transition'){
        this.classList.remove('playing')
    }
    
}
const key = document.querySelectorAll('.key');
key.forEach(key=> key.addEventListener('transitionend', removeTransition));

