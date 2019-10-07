 //楼层
var box=document.getElementById("box");
var f1=document.getElementById("f1");
var f2=document.getElementById("f2");
var f3=document.getElementById("f3");
var f4=document.getElementById("f4");
var f5=document.getElementById("f5");
var f6=document.getElementById("f6");
var f7=document.getElementById("f7");
var f8=document.getElementById("f8");
var f9=document.getElementById("f9");
var f10=document.getElementById("f10");
var lis=document.getElementsByTagName("li");
window.onscroll=function(){
var a= document.documentElement.scrollTop;
if(document.documentElement.scrollTop>400){
    box.style.display="block";
    for(var i=0;i<lis.length;i++){
    lis[i].style.background="none";
    }
    if(a>400&&a<900){
        f1.style.background="deeppink"
    }else if(a>900&&a<1700){
        f2.style.background = "blue"
    }else if(a>1700&&a<2200){
        f3.style.background = "greenyellow"
    }else if(a>2300&&a<3000){
        f4.style.background = "plum"
    }else if(a>3000&&a<3700){
        f5.style.background = "green"
    }else if(a>3700&&a<4400){
        f6.style.background = "blueviolet"
    }else if(a>5100&&a<5800){
        f7.style.background = "pink"
    }else if(a>5800&&a<6300){
        f8.style.background = "palegreen"
    }else if(a>7000&&a<7700){
        f9.style.background = "peachpuff"
    }else if(a>8400&&a<9100){
        f10.style.background = "greenyellow"
    }
    }else{
        box.style.display="none";
    }
}
//轮播图
var  lunbobox=document.getElementById("lunbobox");
var  page=document.querySelectorAll("#page li");
var i=0;
var timer=null;
timer=setInterval(function(){
	i++;
	if(i>=6){
		lunbobox.style.left=0;
		i=1;
	}
	move(lunbobox,"left",-1550*i);
	for (var t = 0; t < page.length; t++) {
                    page[t].style.background = "gray";
                }
                page[i===5?0:i].style.background = "red";
},4000)
for(let k=0;k<page.length;k++){
	page[k].onclick=function(){
		move(lunbobox,k>i?"left":"right",-1550*k);
		i=k;
		for(var t=0;t<page.length;t++){
			page[t].style.background="gray";
		}
		page[i].style.background="red";
	}
}
 lunbobox.onmouseover=function(){
     clearInterval(timer)
           }
 lunbobox.onmouseleave=function(){
 	timer=setInterval(function(){
 		i++;
 		if(i>=6){
 			lunbobox.style.left=0;
 		    i=1;
 		}
 		move(lunbobox,"left",-1550*i);
 		for(var t=0;t<page.length;t++){
 			page[t].style.background="gray";
 		}
 		page[i===5?0:i].style.background="red"
 	},4000)
 }
function move(ele,dir,end){
    clearInterval(ele.timer)
    if(dir==="left"){
        ele.timer=setInterval(function(){
            ele.style.left=ele.offsetLeft-30+"px";
            if(ele.offsetLeft<=end){
                clearInterval(ele.timer);
                ele.style.left=end+"px";
            }
        })
    }else{
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft + 30+ "px";
            if (ele.offsetLeft >= end) {
                clearInterval(ele.timer);
                ele.style.left = end + "px";
            }
        })
    }
}			

     