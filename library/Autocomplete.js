
// the main function where it will use all the functions mentionned above it
function autocmplete( elementsContainer, data) {
  document.getElementById('input').addEventListener("input", function(e) {
    cancel(elementsContainer);
    remove(elementsContainer);
    UpDown(check(this,data,elementsContainer));
  });
}

  function check(input,data,elementsContainer){
    var val= input.value.trim();
    var selectedItems= [];
    data.forEach((item, i) => {
      if(val=="") {
        return;
      }else if(val.toLowerCase().toString() ===item.trim().toLowerCase().substr(0,val.length) ){
        var div = document.createElement("DIV");
        var subWord= item.trim().toLowerCase();
        div.innerHTML= "<strong>"+subWord.substr(0,val.length)+"</strong>" +subWord.substr(val.length,item.length);
        // handling the clicks on the suggestion list
        div.addEventListener("click",()=> {
           input.value=item;
        })
        var oneItem = elementsContainer.appendChild(div);
        selectedItems.push(oneItem);
      }
    });
    return selectedItems;
  }
  // function used to remove child items on every input event
  function remove(node){
    var child =  node.lastElementChild;
    while(child && child !=null){
      node.removeChild(child);
      child = node.lastElementChild;
    }
  }
  // in order to color the background in case pressing the up and down arrow
  function UpDown(items){
    if(items.length !=0 ){
      var i =0;
      document.addEventListener("keydown" ,() =>{
        items[items.length-1].style.backgroundColor="white";
        items[i].style.backgroundColor="lightblue";
        if(i >=1) {
          var j =i;
          items[j-1].style.backgroundColor="white";
        }
        i=i+1;
        if(i >=items.length){
          i=0;
        }
      });
    } return ;
  }
  // removing the whole list in case of pressing the body
  function cancel(elementsContainer) {
   document.body.addEventListener("click", ()=>{
      remove(elementsContainer);   });
  }


  $(document).ready(function(){
   var data=  ["January","February","March","April","May","June","July","August","September","October","November","December"];
   var elementsContainer= document.getElementById('autocomplete');
   autocmplete(elementsContainer, data);
  });
