var fg=1;
function shield(){

fg++;time=null;
if(fg%2==0){
$("#bluebg").animate({opacity:"1"},"normal");
$("#z-nav2").animate({opacity:"1"},"normal");

var s = document.getElementById("bluebg");
 clearTimeout(time); 
   s.style.display = "block";
var z = document.getElementById("z-nav2");
 clearTimeout(time); 
   z.style.display = "block";

	}else{
	$("#z-nav2").animate({opacity:"0"},"normal");
	$("#bluebg").animate({opacity:"0"},"normal");
	var s = document.getElementById("bluebg");
    time=setTimeout(function(){
           s.style.display='none';
      },500);	
	  
	var z = document.getElementById("z-nav2");
    time=setTimeout(function(){
           s.style.display='none';
      });  
	  
	}
}