/*
show contents if you click the arrow
created by daeun yoo on 2023.04.27
*/

/*function view() {
  var answer = document.getElementById('answer');
  //var status = answer.style.display;
  
  if(answer.style.display != 'none'){
    answer.style.display = 'none';
  } else {
    answer.style.display = 'block';
  }
}
*/

function view(element) {
            var before = document.getElementsByClassName("active")[0]               
            if (before && document.getElementsByClassName("active")[0] != element) {  
                before.nextElementSibling.style.display = 'none';
                before.classList.remove("active");                  
            }
            element.classList.toggle("active");      

            var content = element.nextElementSibling;
            if (content.style.display != 'none') {      
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        }
