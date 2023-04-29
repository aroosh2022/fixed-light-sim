function turnlight(argument){ 
  if (argument == 1) {
    document.getElementById("bulb").src = "images/on.png";
  } 
  else if (argument == 2) {
    document.getElementById("bulb").src = "images/off.png";
  }
}