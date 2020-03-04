(function(window) {

 function  Pagination() {
    var pagination = {};
    pagination.setting={
        data:[],
        partContainer:null,
        onePart: null,
        pagination: null,
        limit:0,
        pagination_array_length:0,
        maxnum :0,
        numbersContainer:null,
        arrowSelector:null
    }

    pagination.forming_pagination = () =>  {

       pagination.setting.maxNum=pagination.fillArrayData(this.setting.data, this.setting.limit); // number of pages that shoulf be displayed according to the  available data
       pagination.setting.pagNum=pagination.fillArray(pagination.setting.maxNum.length,pagination.setting.pagination_array_length);
       console.log(pagination.setting.pagNum);
       pagination.displayData(pagination.setting.maxNum[0].data)
       pagination.paginationNumber(pagination.fillArray(pagination.setting.maxNum.length,pagination.setting.pagination_array_length) , pagination.setting.pagination);
       pagination.setting.pagination.firstElementChild.style.border="1px solid white";

       pagination.handleClick(pagination.setting.maxNum);

   }

  pagination.fillArray = (maxNum,pagination_array_length) => {
  var iterations= Math.floor(maxNum/pagination_array_length);
  var numbers=[];
  var subNum=[];
  var i=1;
  var j =1;
  var max=0;
  if(maxNum-pagination_array_length>0) {
    for(var i=1; i<=maxNum; i++){
      subNum.push(i.toString());
      if(i%pagination_array_length==0){
        numbers.push(subNum);
        subNum=[]
      } if(i==maxNum-maxNum%pagination_array_length){
        for(i=i+1; i<=maxNum ; i++){
          subNum.push(i.toString());
        }
        numbers.push(subNum);
        break;
      }
    }
  } else {
    for(var i=1; i<=maxNum; i++){
      subNum.push(i.toString());
    }
    numbers.push(subNum);
  }

  return numbers;
}

 pagination.paginationNumber = (array , pag)=>{
  var length= array.length;
  var j=0;

  // initialising the pagination numbers
  pagination.entity(array[j]);
  document.querySelectorAll(pagination.setting.arrowSelector).forEach( function(item) {

    item.addEventListener("click",function(e){
      document.querySelectorAll(pagination.setting.arrowSelector).forEach( function(item) { item.style.color="white";});
      if (item.id=="left") {
        if(j>=1){  j=j-1;  } else {j=0 ;
            item.style.color="gray"; }
            remove(pagination.setting.partContainer);
            pagination.displayData(pagination.setting.maxNum[j].data);

      }
      if(item.id=="right"){
        if(j<array.length-1){  j=j+1; }else { j=array.length-1 ; item.style.color="gray"; }
        remove(pagination.setting.partContainer);
        pagination.displayData(pagination.setting.maxNum[j].data);
      }
      pagination.remove(pag);
      pagination.entity(array[j]).style.backgroundColor="rgb(4, 127, 140)";
      pagination.handleClick(pagination.setting.maxNum);

    });
  })
}
// visualising the pagination numbers
  pagination.entity = (numbers) => {
  numbers.forEach((item, i) => {
    var element= document.createElement("a")
    element.innerHTML=item;
    pagination.setting.pagination.appendChild(element);
  });
  return pagination.setting.pagination.firstElementChild;
}
// removing the numbers each time
 pagination.remove = (node)=> {
  var child =  node.lastElementChild;
  while(child && child !=null){
    node.removeChild(child);
    child = node.lastElementChild;
  }
}

  pagination.fillArrayData = (data, limit)=>{
  //var iterations= Math.floor(maxDataNum/limit);
  var wholeData=[];
  var subData=[];
  var i=1;
  var j =1;
  var max=0;
  for(var i=0; i<data.length; i++){
    subData.push(data[i]);
    if(i%limit==0 && i!=0) {
      wholeData.push({
        data:subData ,
        index:j
      });
      j=j+1;
      subData=[]
    } if(i==data.length-data.length%limit ){
      for(i; i<data.length; i++){
        subData.push(data[i]);
      }
      wholeData.push({
        data:subData,
        index:j
      });
      break;
    }
  }
   overallData=wholeData;
   return wholeData;
}
pagination.displayData=(data) => {

  pagination.setting.onePart.remove();//deleting this part in order to remove the empty input in the begining
  data.forEach((item , i, array)=>{
     if(i!=array.length) {
         var oneState=pagination.setting.onePart.cloneNode(true);
         pagination.addclick(pagination.template(oneState,array[i]));
         pagination.setting.partContainer.appendChild(oneState);
     }
 });
}

 pagination.handleClick = (data ) => {
   document.querySelectorAll(pagination.setting.numbersContainer+" a").forEach( function(item) {
    item.addEventListener("click", () => {
      pagination.stylePagiNumbers(item);
      remove(pagination.setting.partContainer);
      for (var i = 0; i <data.length; i++) {
        if(data[i].index==parseInt(item.innerHTML)){
             displayedData=data[i].data;
             pagination.displayData(data[i].data);

          return data[i].data;
        }
      }
    });
  })
}

pagination.stylePagiNumbers= (item)=>{
  document.querySelectorAll(pagination.setting.numbersContainer+" a").forEach( function(item) {
  item.style.border="none";
  });
item.style.border="1px solid lightgray"; ;
  }


return pagination;
}


if(typeof (window.pagination=== undefined)) {
           window.pagination=Pagination();
}
})(window)
