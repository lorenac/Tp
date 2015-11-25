$("#demo").click(function(){
    var array = ["lore", "arturo", "pepe", "casa"];
    var left = null; 
    var right = null;
    var length = array.length; 
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1){
        var temporary = array[left];
        array[left] = array[right];
        array[right] = temporary;
    }

   if( Object.prototype.toString.call( array ) === '[object Array]' ) {
    //return true;
    console.log("Es un array");
    }else{
       //return false;
       console.log("No es un array");
    }
 
    array.toString();
    document.getElementById("demo").innerHTML = array;
});




