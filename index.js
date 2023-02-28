function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "Watch/watch.html");
    xhttp.onload = function() {
      document.getElementById("container").innerHTML = this.responseText;
      }
    xhttp.send();
  }