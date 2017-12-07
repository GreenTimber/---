 $(function () {
     //判断是否宽屏
     var winWide = window.screen.width;

     if (winWide >= 1920) {
		 
		  if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#z-nav").css({
                            				
                         });
	      } 
		 
		 
	     else {  $("#z-nav").css({
                             "zoom":"100%"
                          });
		 }
     } 
	 
	 
	 //1400~1600
	 if(winWide >=1400 && winWide<1920){
	    //1400~1600(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){
		 $("#rightlogo").css({
                            "zoom":"80%",
                            "top":"40px",	
							"right":"-20px"	
                         });

	      }		  
		  
	   //1400~1600(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#z-nav").css({
                            "-moz-transform":"scale(0.8,0.8)",
                            "margin-top":"-750px",	
							"margin-right":"-10%"						
                         });
						 

	      if(winWide >=1400 && winWide<=1590){ 				 
		      $("#fft").css({
					    "margin-top":"-69%"
                         });}	

		 if(winWide >=1600 && winWide<=1900){ 
		  	  $("#fft").css({
					    "margin-top":"-61%"
		 });}




		}


		  

	  else   {
	     $("#z-nav").css({
                            "zoom":"80%"
                           
                         });
	  }
    } 
	
	//1280~1360
	if(winWide <1400 ){
	    //1280~1360(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){
		 $("#rightlogo").css({
                            "zoom":"68%",
                            "right":"-4%",
							"top":"5%"
                         });
	
	    

	      } 
	 //1280~1360(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#z-nav").css({
                            "-moz-transform":"scale(0.68,0.68)",
                            "margin-top":"-687px",
							"margin-right":"-19%"
                         });
	    

		   $("#fft").css({
                            "margin-top":"-916px"
							
                         });
						 
			$("#ffs").css({
                            
							"margin-top":"5%"
                         });
						 
		   
						 
	      }
		  
		  
	  else   {
	     $("#z-nav").css({
                            "zoom":"68%",
                          
                         });
		  				 
						 
						 
						 
	  }
	 } 
})
