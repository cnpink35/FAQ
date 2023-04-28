/*
show contents if you click the arrow
created by daeun yoo on 2023.04.27
*/

function view() {
  var answer = document.getElementById('answer');
  //var status = answer.style.display;
  
  if(answer.style.display != 'none'){
    answer.style.display = 'none';
  } else {
    answer.style.display = 'block';
  }
}
