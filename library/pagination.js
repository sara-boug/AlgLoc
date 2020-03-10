(function(window) {

  function  Pagination() {
    var pagination = {};
    pagination.setting={
      partContainer:null,
      onePart: null,
      pagination: null, // the numbers containers, you can personnalize it
      limit:0,// depends of the displayed data, number of data to be desplayer in each pagination page
      pagination_array_length:0,// how many numbers available on the pagination numbers
      maxPagNum :0, // default is 0 hoewever it depends on the amount of data available on the database
      numbersContainer:null, // containing thepagination numbers where it allow to update the each time arrow clicked
      arrowSelector:null // the arrows in the left adn rights of the pagination numbers
    }
    pagination.forming_pagination = () =>  {
      pagination.setting.pagNum=pagination.fillArray(pagination.setting.maxPagNum,pagination.setting.pagination_array_length);
      pagination.paginationNumber(pagination.setting.pagNum, pagination.setting.pagination);
      pagination.addclick(pagination.setting.onePart);
      pagination.setting.pagination.firstElementChild.style.border="1px solid white";// styling the first element by default
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
          }
          if(i==maxNum-maxNum%pagination_array_length){

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
      numbers =numbers.filter(e => e.length>0);
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

            }
            if(item.id=="right"){
              if(j<array.length-1){  j=j+1; }else { j=array.length-1 ; item.style.color="gray"; }
            }
            pagination.remove(pag);
            pagination.entity(array[j]).style.border="1px solid white";
          });
        })
      }
      // visualising the pagination numbers
      pagination.entity = (numbers) => {
        numbers.forEach((item, i) => {
          var element= document.createElement("a")
          element.innerHTML=item;
          pagination.handleClick(element);
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
      pagination.handleClick = (item) => {
          item.addEventListener("click", () => {
            pagination.stylePagiNumbers(item);
          });
      }
      pagination.stylePagiNumbers= (item)=>{
        document.querySelectorAll(pagination.setting.numbersContainer+" a").forEach( function(item) {// in order to disable style for the other elements and allow it for the other element
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
