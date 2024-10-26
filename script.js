i=0;
function defind(){
    i++;
    
    var item=document.getElementById("top-1");
    if(i%2!=0){
         item.style.display='block';
    }else{
         item.style.display='none';
    }
 
}
i=0;
function row(){
    i++;
    
    var item=document.getElementById("test-1");
    if(i%2!=0){
         item.style.display='flex';
   
    }
 
}






// r=0;
// function row(){
//      r++;
//      var testel=document.getElementById('test-1');
//      if(r%2!=0){
//           testel.style.transform="scale(0)";
//      }else{
//           testel.style.transform='scale(1)'
//      }
// }
