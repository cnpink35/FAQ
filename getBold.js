/*
make letters bold if mouse hover
created by daeun yoo on 2023.04.28
*/

//function getBold(){
  //$(document).ready(function){
  $(".qCont").hover{
    function(){
      $(this).css("font-weight", "bold");
      $(this).css("cursor", "pointer");
      $(this).css("color", "black");
    },
    function(){
      $(this).css("font-weight", "normal");
      $(this).css("color", "black");
    }
  };
  //}
//}
