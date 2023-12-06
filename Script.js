function CheckAnswers() {
      Student_answer = document.getElementsByName('Answer1')[0].value
      Teacher_answer = "28.26";
      const form = document.querySelector('form');
      if (Student_answer.length == 0 || Teacher_answer.length == 0) {
            alert("คุณต้องตอบคำถามให้ถูกต้อง");
            return false;
      }
      if (Student_answer == Teacher_answer) {
            alert("ยินดีด้วย!! คุณตอบถูกเชิญเล่นเกมของเราได้เลย");
            document.getElementById("Question").style.display = "none";
            document.getElementById("Curcle").style.display = "none";
            document.getElementById("Game2").style.display = "block";
            document.getElementById("Know").style.display = "none";
      }
      else {
            alert("คุณตอบผิด");
      }

}  

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
  document.getElementById("Answerform").addEventListener("submit", function (event) {
      event.preventDefault();
      CheckAnswers();
  });