console.log("HEllo");

let boxes = document.querySelectorAll(".box");


boxes.forEach(box =>{
    box.addEventListener("click",function(){
        console.log("clicked");
    });
});