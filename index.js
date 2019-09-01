/**mouse clicked on button*****/

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    /**alert("clicked");**cud have used this too if it had beenasked for**/

    /**this.style.color="white";**/

    var innerHTMLbutton = this.innerHTML;

    makeSound(innerHTMLbutton);

    AnimationButton(innerHTMLbutton);

  });
}

/***keyboard pressing**/

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  AnimationButton(event.key);

});

/***function overall**/

function makeSound(key) {

  switch (key) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kb = new Audio("sounds/kick-bass.mp3");
      kb.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(x);

  }
}

/***finction for animation like just clicking for keyboard key pressing and showing a blink animation***/

function AnimationButton(currentkey) {

  /**to add a unknown class that was not previously added in HTML file**/

  document.querySelector("." + currentkey).classList.add("pressed");

  /****to keep the shaded blink for 0.1sec**/

  setTimeout(function() {
    document.querySelector("." + currentkey).classList.remove("pressed");
  }, 100);

}
