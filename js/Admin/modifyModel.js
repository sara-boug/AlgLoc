// begining of pagination handling
var setting = {
  partContainer:document.getElementById('addElement'),
  onePart:document.getElementById('oneElement'),
  pagination:document.querySelector(".pagination .numbers"),
  limit:4,
  pagination_array_length:10,
  maxPagNum:62,
  numbersContainer:".numbers",
  arrowSelector:"#pagination i"
}

pagination.addclick =(element) =>{
  element.childNodes.forEach((item, i) => {
    if(item.className=="modify"){
      item.addEventListener("click" , (e) => {
        e.preventDefault();
        var modiButton=element.childNodes[9];
        click.modify(modiButton,0);
        element.childNodes[5].disabled=false;
      });
    }
  });
}

pagination.setting=setting ;
pagination.forming_pagination();
// the end of paginationhadnling

document.querySelectorAll(".sort button").forEach((item, i) => { // handling the buttons filtering the data
  item.addEventListener("click", () => {
    document.querySelectorAll(".sort button").forEach((items, i) => {
      click.filterdisable(items)
    });
    click.filterenable(item)
  })
});
