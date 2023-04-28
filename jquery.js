$(function(){
	var accoNum = 1;//accoNum은 펼쳐져 있는 값
	jQuery("#accoDiv>li").each(function(q){
		jQuery(this).find(".pBox").click(function(){
		//2020.12.18 황선호 오류 수정 
		//	if(accoNum == 1) {
		//		jQuery(this).parent().addClass("on");
		//		jQuery(this).next().stop(true, true).slideDown(300);
		//		jQuery(this).find(".qNum").find("img").attr("src", jQuery(this).find(".qNum").find("img").attr("src").replace(".gif", "_on.gif"));
		//		jQuery(this).find(".qBtn").find("img").attr("src", jQuery(this).find(".qBtn").find("img").attr("src").replace(".gif", "_on.gif"));
		//		accoNum = q;
		//	} else {
				if(q != accoNum) {
					jQuery("#accoDiv>li").eq(accoNum).removeClass("on");
					jQuery("#accoDiv>li").eq(accoNum).find(".pBox").next().stop(true, true).slideUp(300);
					jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qNum").find("img").attr("src", jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qNum").find("img").attr("src").replace("_on.gif", ".gif"));
					jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qBtn").find("img").attr("src", jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qBtn").find("img").attr("src").replace("_on.gif", ".gif"));
					
					accoNum = q;
					
					jQuery(this).parent().addClass("on");
					jQuery(this).next().stop(true, true).slideDown(300);
					jQuery(this).find(".qNum").find("img").attr("src", jQuery(this).find(".qNum").find("img").attr("src").replace(".gif", "_on.gif"));
					jQuery(this).find(".qBtn").find("img").attr("src", jQuery(this).find(".qBtn").find("img").attr("src").replace(".gif", "_on.gif"));
				} else { //같은 거 눌러서 다 접혔을때
					jQuery("#accoDiv>li").eq(accoNum).removeClass("on");
					jQuery("#accoDiv>li").eq(accoNum).find(".pBox").next().stop(true, true).slideUp(300);
					jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qNum").find("img").attr("src", jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qNum").find("img").attr("src").replace("_on.gif", ".gif"));
					jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qBtn").find("img").attr("src", jQuery("#accoDiv>li").eq(accoNum).find(".pBox").find(".qBtn").find("img").attr("src").replace("_on.gif", ".gif"));
					accoNum = -1;
				}
			//}
		})
	})
})
