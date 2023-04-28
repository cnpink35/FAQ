function getBold(){
  $("#qCont").hover{
    function(){
      $(this).css("font-weight", "bold");
      $(this).css("cursor", "pointer");
    }
    function(){
      $(this).css("font-weight", "normal");
    }
  }
}
