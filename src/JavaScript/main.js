var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

// Calculus

function switchCalculus (event, switchTab) {
    let calculusType, calculusTypeExample;
    calculusTypeExample = document.getElementsByClassName("calculus-type-example");
    for (i = 0; i < calculusTypeExample.length; i++) {
        calculusTypeExample[i].style.display = "none";
    }

    calculusType = document.getElementsByClassName("calculus-type");
    for (i = 0; i < calculusType.length; i++) {
        calculusType[i].className = calculusType[i].className.replace("active", "")
    }

    var x = window.matchMedia("max-width: 767px")

    if (x.matches) {
        document.getElementById(switchTab).style.display = "block";
        event.currentTarget.className += " active";
    } else {
        document.getElementById(switchTab).style.display = "flex";
        event.currentTarget.className += " active";
    }
    
}