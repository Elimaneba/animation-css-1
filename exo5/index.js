var el = document.querySelector(".box");
el.style.left="0px"
el.style.top = "0px"

el.addEventListener("click", clickedBox, false);

function clickedBox(evt) {
  if((el.style.left ==="0px") && (el.style.top==="0px")) {
    el.style.left="300px"
   } 
  else if ((el.style.left ==="300px")&& (el.style.top==="0px")) {
   el.style.top="300px"
   }
  else if ((el.style.left ==="300px")&& (el.style.top==="300px")) {
     el.style.left="0px"
   }
   else if ((el.style.left ==="0px")&& (el.style.top==="300px")){
       el.style.top="0px"
   }
 }