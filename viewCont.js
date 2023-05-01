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
            var before = document.getElementsByClassName("active")[0];     
            var q = $('.qMark img');
            var arrow = $('.click img');
            if (before && document.getElementsByClassName("active")[0] != element) {  
                before.nextElementSibling.style.display = 'none';
                q.attr('src', q.attr('src').replace('_op.png', '.png'));
                arrow.attr('src', arrow.attr('src').replace('up_arrow.jpg', 'down_arrow.png'));
                before.classList.remove("active");
            }
            element.classList.toggle("active");      

            var content = element.nextElementSibling;
            if (content.style.display != 'none') {      
                content.style.display = 'none';
                element.find(".qMark").find("img").attr('src', element.find(".qMark").find("img").attr("src").replace(/_op.png/g, '.png'));
                element.find(".click").find("img").attr('src', element.find(".click").find("img").attr("src").replace(/up_arrow.jpg/g, 'down_arrow.png'));
              /*jQuery(this).find(".qMark").find("img").attr("src", jQuery(this).find(".qMark").find("img").attr("src").replace("_op.png", ".png"));
              jQuery(this).find(".click").find("img").attr("src", jQuery(this).find(".click").find("img").attr("src").replace("up_arrow.jpg", "down_arrow.png"));
              document.getElementsByClassName("qMark").src="q_mark.png";
              document.getElementsByClassName("click").src="down_arrow.png";*/
            } else {
                content.style.display = 'block';
                element.find(".qMark").find("img").attr('src', element.find(".qMark").find("img").attr("src").replace(/.png/g, '_op.png'));
                element.find(".click").find("img").attr('src', element.find(".click").find("img").attr("src").replace(/down_arrow.png/g, 'up_arrow.jpg'));
              /*jQuery(this).find(".qMark").find("img").attr("src", jQuery(this).find(".qMark").find("img").attr("src").replace(".png", "_op.png"));
              jQuery(this).find(".click").find("img").attr("src", jQuery(this).find(".click").find("img").attr("src").replace("down_arrow.png", "up_arrow.jpg"));
              document.getElementsByClassName("qMark").src="q_mark_op.png";
              document.getElementsByClassName("click").src="up_arrow.jpg";*/
            }
        }
