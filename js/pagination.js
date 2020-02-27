$(document).ready(function(){
  var data = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque"];
  // modifying the initial elelment
  var stateContainer= document.getElementById('addState');
  //looping through the arrray and modifying the input
  document.getElementById('OneState').childNodes[1].value= data[0];
  data.forEach((item , i, array)=>{
    if(i!=array.length-1) {
      var oneState= document.getElementById('OneState').cloneNode(true);
      oneState.childNodes[1].value= array[i+1];
      stateContainer.appendChild(oneState);
    }
    return;
  });

  var pagination= document.querySelector(".pagination .numbers");
  var limit= 4;
  // the pages left according  to the number of data
  var number_of_pages=Math.floor(50/limit)+data.length%limit;
  var pagination_array_length= 7;

   paginationtNumber(50,7);


  function paginationtNumber(maxNum,pagination_array_length) {
    var iterations= Math.floor(maxNum/pagination_array_length);
    var numbers=[];
    var i=1;
    var j =1;
    var max=0;

   // initialising the pagination numbers
    for(i; i<=pagination_array_length; i++){
      numbers.push(i.toString())
    }
    entity(numbers);

    document.querySelectorAll("#pagination i").forEach( function(item) {
      item.addEventListener("click",function(e){
        numbers=[];
        if (item.id=="left") {
          if(j==1){
            return;
          } else {
          // for i we move two steps howe ever for  max we move  by one step
          i=i-(pagination_array_length*2);
          max=max-pagination_array_length;
          j=j-1;
          console.log(j);
        }
        }
        if (item.id=="right"){
          if(j> iterations){
            return;
          } else {
          max=j*pagination_array_length+pagination_array_length;
          if(j== iterations){
            max= 50;
          }
          j=j+1;
        }
        }
        remove(pagination);
        for(i; i<=max;i++){
          numbers.push(i.toString());
        }
        entity(numbers);
      });
    })

  }
  // visualising the pagination numbers
  function entity(numbers){
    numbers.forEach((item, i) => {

      var element= document.createElement("a")
      element.innerHTML=item;
      pagination.appendChild(element);
    });

  }
  // removing the numbers each time
  function remove(node){
    var child =  node.lastElementChild;
    while(child && child !=null){
      node.removeChild(child);
      child = node.lastElementChild;
    }
  }
});
