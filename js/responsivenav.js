function responsiveNav() {
  "use strict";
  /*jslint browser:true */
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}

function funcDropdown() {
  "use strict";
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  "use strict";
  if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
      }
  }
};