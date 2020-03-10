(function(window) {
 function Effect() {
  var click={};

 click.filterdisable=(items)=> {
   items.style.border="1px solid white";
   items.style.color="white";
   items.style.transform="scale(0.9)";
 }

click.filterenable=(item) => {
  item.style.border="1px solid #047F8C";
  item.style.color="#047F8C";
  item.style.transform="scale(1.05)";
}

click.modify =(modiButton ,i) =>{
  modiButton.disabled=false;
  modiButton.style.border="1px solid lightgray";
  modiButton.childNodes[i].style.color="lightgray";
  modiButton.onmouseover= function(){ this.style.cursor="pointer"; this.style.backgroundColor="rgba(0, 255, 0, 1)"; };
  modiButton.onmouseout= function(){ this.style.cursor="pointer"; this.style.backgroundColor="rgba(0, 255, 0, 0)"; };
}
click.enable =(element) =>{
  element.childNodes.forEach((item) => {
    item.disabled=false;

  });

}
return click;
}

if(typeof(window.click))  {
   window.click=Effect();
}


})(window)
