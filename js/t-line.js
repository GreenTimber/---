 $(function () {
     //判断是否宽屏
     var winWide = window.screen.width;
	
     if (winWide >= 1920) {
		 
		  if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#i-total").css({
                            "-moz-transform":"scale(0.8,0.8)",
                            "margin-top":"-6.5%",	
							"margin-left":"-7%"						
                         });
	      } 
		 
		 
	     else {  $("#i-total").css({
                             "zoom":"100%"
                          });
		 }
     } 
	 //1400~1600
	 if(winWide >=1400 && winWide<1920){
	    //1400~1600(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){
		 $("#i-total").css({
                            "zoom":"80%",
                             "margin-left":"3.5%",
							  "margin-top":"1%"
                         });

	      }		  
		  
	   //1400~1600(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#i-total").css({
                            "-moz-transform":"scale(0.8,0.8)",
                            "margin-top":"-6.5%",	
							"margin-left":"-7%"						
                         });
	      } 

	  else   {
	     $("#i-total").css({
                            "zoom":"80%",
                           
                         });
	  }
    } 
	
	//1280~1360
	if(winWide <1400 ){
	    //1280~1360(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){
		 $("#i-total").css({
                            "zoom":"68%",
                            "margin-left":"3.5%"
                         });
		$("#p-content").css({
                            "zoom":"80%",
                            "margin-left":"17%"
                         });
	    

	      } 
	 //1280~1360(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#i-total").css({
                            "-moz-transform":"scale(0.68,0.68)",
                            "margin-top":"-12.5%",
							"margin-left":"-15%"
                         });
	      } 

	  else   {
	     $("#i-total").css({
                            "zoom":"68%",
                          
                         });
	  }
	 } 
})
