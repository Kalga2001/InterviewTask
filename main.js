var array = [6, 2, 3, 1, 7, 4, 8, 5]



function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    MySorting(array);
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${(element)}">${(element)}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)    
}

function MySorting(array)
{
  let min;
  for(let i = 0; i < array.length-1;i++){
   min = i;
   for(let j = i+1;j<array.length;j++){
   if(array[j] < array[min]){
    min = j;
    }
   }
   if(min !== i){
    swap(array,i,min);
    }
  } 
}

function swap(array, i, j) {
    [array[i],array[j]] = [array[j],array[i]];
}
