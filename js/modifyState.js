var setting = { data : ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque",
"Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque",
"Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque",
"Albany", "Albuquerque","Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque",
"Albany", "Albuquerque","Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque",
"Albany", "Albuquerque","Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque",
"Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque","Akron", "Albany", "Albuquerque",
"Akron", "Albany"],
partContainer:document.getElementById('addState'),
onePart:document.getElementById('OneState'),
pagination:document.querySelector(".pagination .numbers"),
limit:4,
pagination_array_length:10,
numbersContainer:".numbers",
arrowSelector:"#pagination i"
}

pagination.addclick =(element) =>{
  console.log(element);
    element.childNodes.forEach((item, i) => {
      if(item.className=="modify"){
        item.addEventListener("click" , (e) => {
        e.preventDefault();
         var modiButton=document.querySelector("button.modify");
              modiButton.disabled=false;
              modiButton.style.border="1px solid lightgray";
              modiButton.style.color="lightgray";
              console.log(document.querySelector("div.oneState input"));
             element.childNodes[1].disabled=false;

      });
      }
    });
  }
pagination.template=(element , elementData) => {
   element.childNodes[1].value= elementData;
   return element;
}
pagination.setting=setting ;
pagination.forming_pagination();

document.querySelectorAll(".sort button").forEach((item, i) => {
     item.addEventListener("click", () => {
       document.querySelectorAll(".sort button").forEach((items, i) => {
         items.style.border="1px solid white";
         items.style.color="white";
         items.style.transform="scale(0.9)";
       });
       item.style.border="1px solid #047F8C";
       item.style.color="#047F8C";
       item.style.transform="scale(1.05)"

     })
});
