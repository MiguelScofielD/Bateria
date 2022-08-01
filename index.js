var sons = ['sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3','sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3'];

for(let i=0; i < document.querySelectorAll("button").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var audio = new Audio(sons[i]);
    audio.play();

  })

}

document.addEventListener('keydown', function(e){
  if (e.keyCode === 87) {
    var audio = new Audio(sons[0]);
    audio.play();
}
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 65) {
    var audio = new Audio(sons[1]);
    audio.play();
}
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 83) {
    var audio = new Audio(sons[2]);
    audio.play();
}
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 68) {
    var audio = new Audio(sons[3]);
    audio.play();
}
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 74) {
    var audio = new Audio(sons[4]);
    audio.play();
}
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 75) {
    var audio = new Audio(sons[5]);
    audio.play();
}
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 76) {
    var audio = new Audio(sons[6]);
    audio.play();
}
});
