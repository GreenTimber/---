//<!--icon-->

var fgr=1;
function shield(){

fgr++;time=null;
if(fgr%2==0){
$("#bluebg").animate({opacity:"1"},"normal");


var s = document.getElementById("bluebg");
 clearTimeout(time); 
   s.style.display = "block";


	}else{

	$("#bluebg").animate({opacity:"0"},"normal");
	var s = document.getElementById("bluebg");
    time=setTimeout(function(){
           s.style.display='none';
      },500);	
	  
 
	  
	}
}

//<!--icon2-->

var fg=2;
function a2(){
fg++;
if(fg%2==1){	
	$("#nav2").css({"-webkit-transform": "rotate(180deg);"});
    $("#nav2").css({"-moz-transform":"rotate(180deg)"});
    $("#nav2").css({"-ms-transform":"rotate(180deg)"});
    $("#nav2").css({"-o-transform":"rotate(180deg)"});
    $("#nav2").css({"transform":"rotate(180deg)"});
	$("#navshow2").animate({opacity:"1"},"normal");
	//document.getElementById("navshow").style.display="";
	}else{
	 $("#nav2").css({"-webkit-transform": "rotate(180deg);"});
    $("#nav2").css({"-moz-transform":"rotate(180deg)"});
    $("#nav2").css({"-ms-transform":"rotate(180deg)"});
    $("#nav2").css({"-o-transform":"rotate(180deg)"});
    $("#nav2").css({"transform":"rotate(0deg)"});
	$("#navshow2").animate({opacity:"0"},"normal");
	//document.getElementById("navshow").style.display="none";
}
}


var fgr=1;
function shieldsli(){

fgr++;time=null;
if(fgr%2==0){
$("#bluebgs").animate({opacity:"1"},"normal");


var s = document.getElementById("bluebgs");
 clearTimeout(time); 
   s.style.display = "block";


	}else{

	$("#bluebgs").animate({opacity:"0"},"normal");
	var s = document.getElementById("bluebgs");
    time=setTimeout(function(){
           s.style.display='none';
      },500);		    
	}
}


$(function(){
   $("#pics").animate({
      height:'41px',
      width:'41px'
   },2500,function(){
      $(".title-des").fadeIn(1000);  
    });
 });

