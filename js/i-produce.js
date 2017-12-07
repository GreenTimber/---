 $(function () {
     //判断是否宽屏
     var winWide = window.screen.width;


	  
     if (winWide >= 1920) {
	      $("#i-total").css({
                             "zoom":"100%"
                          });
						  
			//副手页蓝底背景			 
		 $("#bluebg").css({
                           
                         });				  
			  
      
     }  	 
	 //1400~1600
	 if(winWide >=1400 && winWide<1920){
	    //1400~1600(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){

	  
	   //icon
		    $("#icon").css({
                            "zoom":"80%",
                             "bottom":"-20px",
                         });
		    $("#icon2").css({
                             "zoom":"80%",
                          
                         });			 
						 
			//二维码					 
			 $("#ewcode1").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });
			 $("#ewcode2").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });		 
			//Str左下角小菜单			 
			  $("#rightlogo2").css({
                            "zoom":"80%",
							 "left":"85px",
							 "bottom":"20px",
                         });							
			//End左下角小菜单	
           //Str部分幕布	 
			  $("#mubusf").css({
                               "zoom":"80%",
						
                         });
              $("#mubusfie").css({
                            
						    "margin-left":"-6.2%",
                         });	

				 $("#mubusf-slider").css({
                            
						   
							     
                         });			 
			//End部分幕布	
			
			   //Str部分幕布	 
			  $("#bluebg").css({
                            "top":"150px",
						  
                         });							
			//End部分幕布	


		//通用
		 $("#i-total").css({
                            "zoom":"80%",
                            "margin-left":"24.9%"
                         });
						 
		//时间轴
		 $("#i-totaltime").css({
                              "zoom":"80%",
                          
                         });
		 $("#s-song").css({
                              "zoom":"80%",
                          
                         });				 
		 $("#s-zi").css({
                               "zoom":"80%",
                          
                         });				 
						 
	  
	  
	  
		 //通用
		 $("#i-total").css({
                             "zoom":"80%",
                            "margin-left":"17%"
                         });
		//副手
		 $("#f-total").css({
                          "zoom":"80%",
                            "margin-left":"17%"
                         });
	    //产品
		 $("#p-total").css({
                           "zoom":"80%",
                            "margin-left":"17%"
                         });
	     //五行
		 $("#wx-total").css({
                            "zoom":"80%",
                            "margin-left":"17%"
                         });
		 //首页中间			 
	     $("#index-pic").css({
                           
                         
                         });
		 //副手页蓝底背景			 
		 $("#bluebg").css({
                                  
                         });				 	 
	
       //4个餐盘			 
	                   if(winWide >=1400 && winWide<=1590){ 
					   
		  $("#quall").css({
                           
                     
                         });}	

		 if(winWide >=1600 && winWide<=1900){ 
		  $("#quall").css({
                        
                     
                         });}		
		
		//产品介绍			 
		$("#p-content").css({
                           "zoom":"80%",
                            "margin-left":"17%"
                         });
	     //产品介绍						 
	    $("#pps").css({
                           "zoom":"80%",
                             "margin-left":"13%"
                         });

        //会员
        $("#rightlogo").css({
                           "zoom":"80%",
                            "right":"-1%",
							"top":"5%"
                         });					 
						 
						 
				 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
	    
        
	      }		  
		  
	   //1400~1600(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
			 //icon
		    $("#icon").css({
                            "-moz-transform":"scale(0.8,0.8)",
                            "bottom":"-10px",
                         });
		    $("#icon2").css({
                             "-moz-transform":"scale(0.8,0.8)",
                          
                         });			 
						 
			//二维码					 
			 $("#ewcode1").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });
			 $("#ewcode2").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });		 
			//Str左下角小菜单			 
			  $("#rightlogo2").css({
                           "-moz-transform":"scale(0.8,0.8)",
							 "left":"35px",
							 "bottom":"20px",
                         });							
			//End左下角小菜单				 
						 
						 
						 
			 $("#i-total").css({
                           "-moz-transform":"scale(0.8,0.8)",
                            "margin-top":"-4.5%"
                         });
							 
			//时间轴
		 $("#i-totaltime").css({
                               "-moz-transform":"scale(0.8,0.8)",
                               "margin-top":"-6%",
							   "margin-left":"-11%"
                         });
		 $("#s-song").css({
                           
                          
                         });				 
		 $("#s-zi").css({
                             
                          
                         });				 
						 
	     
          $("#wx-total").css({
                           "-moz-transform":"scale(0.8,0.8)",
                            "margin-top":"-5%"
                         });

          $("#p-total").css({
                            "-moz-transform":"scale(0.8,0.8)",
                             "margin-top":"-1%"
							
                         });
			//产品介绍			 
		$("#p-content").css({
                             "-moz-transform":"scale(0.8,0.8)",
                           
                         });			 
						 
						 
        //产品介绍						 
	      $("#pps").css({
                            "-moz-transform":"scale(0.8,0.8)",
                             "margin-top":"-1%"
                         });
						
		 
		 
		//副手页				 
            $("#f-logo").css({  
			               
					   "-moz-transform":"scale(0.8,0.8)",
                         });
		 		 
						 				 
			//4个餐盘			 
	                   if(winWide >=1400 && winWide<=1590){ 
					   
		  $("#quall").css({
                           
                       "margin-left":"7%",
                       "-moz-transform":"scale(0.8,0.8)",
                         });}	

		 if(winWide >=1600 && winWide<=1900){ 
		  $("#quall").css({
                        
                       "margin-left":"12%",
                       "-moz-transform":"scale(0.8,0.8)",
                         });}				 
						 
 
						 
						 
						 
	      } 

		  
		  
    //1400~1600(pt)
	  else   {
		  //icon
		    $("#icon").css({
                              "zoom":"80%"
                          
                         });
		    $("#icon2").css({
                              "zoom":"80%"
                          
                         });			 
						 
			//二维码					 
			 $("#ewcode1").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });
			 $("#ewcode2").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });		 
			//Str左下角小菜单			 
			  $("#rightlogo2").css({
                            "zoom":"85%",
							 "left":"85px",
							 "bottom":"20px",
                         });							
			//End左下角小菜单	
           //Str部分幕布	 
			  $("#mubusf").css({
                             "zoom":"80%"
						
                         });							
			//End部分幕布	
		  
		  
		  
		  
	     $("#i-total").css({
                            "zoom":"80%"
                          
                         });
						 
			  $("#i-totaltime").css({
                            "zoom":"80%"
                          
                         });			 
						 
						 
		   $("#f-total").css({
                            "zoom":"80%",
                          
                         });				 
						 
        //五行
		 $("#wx-total").css({
                            "zoom":"80%",
                         });			 
		 
		 
		 
	 			

						 
		//4个餐盘			 
	                   if(winWide >=1400 && winWide<=1590){ 
					   
		  $("#quall").css({
                           
                      
                         });}	

		 if(winWide >=1600 && winWide<=1900){ 
		  $("#quall").css({
                        
                     
                         });}					 
						 

		 				 //产品
		 $("#p-total").css({
                            "zoom":"80%",
                           
                         });
						 //产品介绍			 
		$("#p-content").css({
                            "zoom":"80%",
                             
                         });
						 
		    //产品介绍						 
	      $("#pps").css({
                            "zoom":"68%",
                         });				 
						 
			 
						 
	  }
    } 
	
	
	
	
	
	//1280~1360
	if(winWide <1400 ){
	    //1280~1360(ie)
	  if(!!window.ActiveXObject || "ActiveXObject" in window){
		 //icon
		    $("#icon").css({
                            "zoom":"68%",
                             "bottom":"-20px",
                         });
		    $("#icon2").css({
                            "zoom":"68%",
                          
                         });			 
						 
			//二维码					 
			 $("#ewcode1").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });
			 $("#ewcode2").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });		 
			//Str左下角小菜单			 
			  $("#rightlogo2").css({
                            "zoom":"85%",
							 "left":"85px",
							 "bottom":"20px",
                         });							
			//End左下角小菜单	
           //Str部分幕布	 
			  $("#mubusf").css({
                            "zoom":"68%",
						    "margin-left":"24.9%",
                         });
              $("#mubusfie").css({
                            
						    "margin-left":"-6.2%",
                         });	

				 $("#mubusf-slider").css({
                            
						      "margin-left":"-33.2%",
							     
                         });			 
			//End部分幕布	
			
			   //Str部分幕布	 
			  $("#bluebg").css({
                            "top":"150px",
						  
                         });							
			//End部分幕布	


		//通用
		 $("#i-total").css({
                            "zoom":"68%",
                            "margin-left":"24.9%"
                         });
						 
		//时间轴
		 $("#i-totaltime").css({
                            "zoom":"68%",
                          
                         });
		 $("#s-song").css({
                            "zoom":"68%",
                          
                         });				 
		 $("#s-zi").css({
                            "zoom":"68%",
                          
                         });				 
						 
						 
						 
		//副手
		 $("#f-total").css({
                            "zoom":"68%",
                            "margin-left":"25%"
                         });
	    //产品
		 $("#p-total").css({
                            "zoom":"68%",
                            "margin-left":"25%"
                         });
	     //五行
		 $("#wx-total").css({
                            "zoom":"68%",
                            "margin-left":"25%"
                         });
		 //首页中间			 
	     $("#index-pic").css({
                           
                            "margin-left":"-15.5%"
                         });
		 //副手页蓝底背景			 
		 $("#bluebg").css({
                           "margin-left":"-340px"              
                         });				 	 
		//4个餐盘
         $("#quall").css({
                           "zoom":"68%",
                           "margin-left":"19%"
                         });	

		
		//产品介绍			 
		$("#p-content").css({
                            "zoom":"68%",
                             "right":"4%"
                         });
	     //产品介绍						 
	    $("#pps").css({
                             "zoom":"68%",
                             "margin-left":"13%"
                         });

        //产品介绍		
        $("#rightlogo").css({
                            "zoom":"68%",
                            "right":"-4%",
							"top":"5%"
                         });						 
	    

	      } 
	 //1280~1360(ff)
	 else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		 //icon
		    $("#icon").css({
                            "-moz-transform":"scale(0.68,0.68)",
                            "bottom":"-10px",
                         });
		    $("#icon2").css({
                             "-moz-transform":"scale(0.68,0.68)",
                          
                         });			 
						 
			//二维码					 
			 $("#ewcode1").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });
			 $("#ewcode2").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });		 
			//Str左下角小菜单			 
			  $("#rightlogo2").css({
                           "-moz-transform":"scale(0.8,0.8)",
							 "left":"35px",
							 "bottom":"20px",
                         });							
			//End左下角小菜单	
           //Str部分幕布	 
			  $("#mubusf").css({
                        
						  
                         });
              $("#mubusfie").css({
                            
						    
                         });	

			   $("#mubusf-slider").css({
                            
						  
							     
                         });
						 
              $("#pt").css({
                              
                         });

						 
			//End部分幕布	
			
			   //Str部分幕布	 
			  $("#bluebg").css({
                            "top":"150px",
						  
                         });							
			//End部分幕布	

		 
		 $("#i-total").css({
                            "-moz-transform":"scale(0.68,0.68)",
                            "margin-top":"-10%"
                         });
						 
			//时间轴
		 $("#i-totaltime").css({
                               "-moz-transform":"scale(0.68,0.68)",
                              "margin-top":"-10%",
							   "margin-left":"-20%"
                         });
		 $("#s-song").css({
                           
                          
                         });				 
		 $("#s-zi").css({
                             
                          
                         });					 
						 
						 
	     
          $("#wx-total").css({
                            "-moz-transform":"scale(0.68,0.68)",
                            "margin-top":"-15%"
                         });

          $("#p-total").css({
                            "-moz-transform":"scale(0.68,0.68)",
                             "margin-top":"-1%"
							
                         });
			//产品介绍			 
		$("#p-content").css({
                             "-moz-transform":"scale(0.68,0.68)",
                           
                         });			 
						 
						 
        //产品介绍						 
	      $("#pps").css({
                            "-moz-transform":"scale(0.68,0.68)",
                             "margin-top":"-1%"
                         });
						 
		  $("#ffhy").css({
					
                         });
						 
		 
		 
			 //副手页				 
            $("#f-logo").css({  
			               
					  "-moz-transform":"scale(0.68,0.68)"
                         });
		 
						 
				//4个餐盘			 
	                   if(winWide <=1280 ){ 
					   
		  $("#quall").css({
                           
                      "-moz-transform":"scale(0.68,0.68)",
					  "margin-left":"5%"
                         });}	

		 if(winWide >=1360 && winWide<=1366){ 
		  $("#quall").css({
                           
                     "-moz-transform":"scale(0.68,0.68)",
					  "margin-left":"6%"
                         });}			 
						 
						 
						 
						 
		 } 
		 
		 
		 
		 
		 

	  else   {
		  //icon
		    $("#icon").css({
                            "zoom":"68%",
                          
                         });
		    $("#icon2").css({
                            "zoom":"68%",
                          
                         });			 
						 
			//二维码					 
			 $("#ewcode1").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });
			 $("#ewcode2").css({
                            
							 "width":"80px",
							 "height":"80px",
                         });		 
			//Str左下角小菜单			 
			  $("#rightlogo2").css({
                            "zoom":"85%",
							 "left":"85px",
							 "bottom":"20px",
                         });							
			//End左下角小菜单	
           //Str部分幕布	 
			  $("#mubusf").css({
                            "zoom":"68%",
						
                         });							
			//End部分幕布	

			
		  
	     $("#i-total").css({
                            "zoom":"68%",
                          
                         });
						 
	     $("#i-totaltime").css({
                            "zoom":"68%",
                          
                         });
	      $("#f-total").css({
                            "zoom":"68%",
                          
                         });
						 
						  //五行
		 $("#wx-total").css({
                            "zoom":"68%",
                           
                         });
						 
						 //产品
		 $("#p-total").css({
                            "zoom":"68%",
                           
                         });
						 //产品介绍			 
		$("#p-content").css({
                            "zoom":"68%",
                             
                         });
						 
						 
		    //产品介绍						 
	      $("#pps").css({
                            "zoom":"68%",
                         });				 
						 
						
				//4个餐盘			 
	                   if(winWide <=1280 ){ 
					   
		  $("#quall").css({
                           
                           "margin-left":"350px"
                         });}	

		 if(winWide >=1360 && winWide<=1366){ 
		  $("#quall").css({
                           
                           "margin-left":"400px"
                         });}


				


				
						 
	  }
	 } 
})
