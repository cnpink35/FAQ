/*
show contents if you click the arrow
created by daeun yoo on 2023.04.27
*/

function view(element) {
            var before = document.getElementsByClassName("active")[0];                 
            var indexNo = $(this).closest("li").index();
            
            if (before && document.getElementsByClassName("active")[0] != element) {  
                before.nextElementSibling.style.display = 'none';
                /*$('.list li').eq(indexNo).find('.qLine').find('.qMark').find('img').attr('src', $('.list li').eq(indexNo).find('.qLine').find('.qMark').find('img').attr('src').replace('_op.png', '.png'));
                $('.list li').eq(indexNo).find('.qLine').find('.click').find('img').attr('src', $('.list li').eq(indexNo).find('.qLine').find('.click').find('img').attr('src').replace('up_arrow.jpg', 'down_arrow.png'));*/
                before.classList.remove("active");
            }
            element.classList.toggle("active");      

            var content = element.nextElementSibling;
            if (content.style.display != 'none') {      
                content.style.display = 'none';
                /*$('.list li').eq(indexNo).find('.qLine').find('.qMark').find('img').attr('src', $('.list li').eq(indexNo).find('.qLine').find('.qMark').find('img').attr('src').replace("_op.png", '.png'));
                $('.list li').eq(indexNo).find('.qLine').find('.click').find('img').attr('src', $('.list li').eq(indexNo).find('.qLine').find('.click').find('img').attr('src').replace('up_arrow.jpg', 'down_arrow.png'));*/
            } else {
                content.style.display = 'block';
                /*$('.list li').eq(indexNo).find('.qLine').find('.qMark').find('img').attr('src', $('.list li').eq(indexNo).find('.qLine').find('.qMark').find('img').attr('src').replace(".png", '_op.png'));
                $('.list li').eq(indexNo).find('.qLine').find('.click').find('img').attr('src', $('.list li').eq(indexNo).find('.qLine').find('.click').find('img').attr('src').replace("down_arrow.png", 'up_arrow.jpg'));*/
            }
        }