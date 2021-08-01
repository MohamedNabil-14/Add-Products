// 1- document.getElementById("demo");
// 2- document.getElementsByClassName("test") // 4bh array
// 3- document.getElementsByTagName("h1")  // 4bh array
// 4- document.getElementsByName("item") // 4bh array
// 5- document.querySelectorAll("div .test") // 4bh array
// 6- document.querySelector(".test");  // element wa7id






// click
//dblclick
//mousemove
//mouseenter   , mouseover
//mouseleave   , mouseout

//focus
//blur
//keyup
//keydown
//keypress




var myImg = document.querySelector("img");


var xGlobal ;
var yGlobal ;

document.addEventListener("mousemove" , function( e ){

    xGlobal = e.clientX
    yGlobal = e.clientY

    myImg.style.left = e.clientX;
    myImg.style.top = e.clientY;

})

document.addEventListener("click" , function(){

    myImg.style.left = xGlobal;
    myImg.style.top = yGlobal;

})


















