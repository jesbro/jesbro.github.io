
function menuToggle(x) {
    x.classList.toggle("change");

    if (document.getElementById("navigation").style.display === "block") {
     document.getElementById("navigation").style.display = "none";
    }
    else{
      document.getElementById("navigation").style.display = "block";  
    }  
}
