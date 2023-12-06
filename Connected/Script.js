function Menu() {
document.getElementById("Mydropdown").classList.toggle("show");
window.onclick = function(event) {
                        if (!event.target.matches('.bar')) {
                        var dropdowns = document.getElementsByClassName("dropdown-bar");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                              var openDropdown = dropdowns[i];
                              if (openDropdown.classList.contains('show')) {
                                    openDropdown.classList.remove('show');
                      }
                     }
                    }
                   }
}

function Game() {
document.getElementById("Mydropdown2").classList.toggle("show");
}