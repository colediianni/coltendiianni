var clickCounter = 0;

document.getElementById("email").onclick = function() {myFunction()};

function myFunction() {
  clickCounter++;
  document.getElementById("email").innerHTML = "cwdiianni@gmail.com";
  if (clickCounter==2) {
    document.getElementById("email").href = "mailto:cwdiianni@gmail.com";
    document.getElementById("email").rel = "noopener noreferrer";
    document.getElementById("email").target = "_blank";
  }
}