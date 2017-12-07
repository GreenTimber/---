 $(function () {
     //判断是否宽屏
     var winWide = window.screen.width;
	  alert(winWide);
	  if(!!window.ActiveXObject || "ActiveXObject" in window){alert("ie")} 
	  if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){alert("ff")}
	  
     if (winWide >= 1920) {
	      $("#z-icon").css({
                             "zoom":"100%"
                          });
      
     } 
	 //1400~1600
	 if(winWide >=1400 && winWide<1920){
	    //1400~1600(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){
		 $("#z-icon").css({
                          
                         });
	   
	
        
	      }		  
		  
	   //1400~1600(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#z-icon").css({
                          
                         });
	      } 

	  else   {
	     $("#z-icon").css({
                            "zoom":"80%"
                          
                         });
	  }
    } 
	//1280~1360
	if(winWide <1400 ){
	    //1280~1360(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){
		 $("#z-icon").css({
                            "zoom":"68%",
                        
                         });
	
	    

	      } 
	 //1280~1360(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 $("#z-icon").css({
                            
                            
                         });
	      } 

	  else   {
	     $("#z-icon").css({
                            "zoom":"68%",
                          
                         });
	  }
	 } 
})
