function chirp(n){
  //base case
  console.log(n);
  if( n === 1){
    return ' chirp';
  } 
}



$(document).ready(function(){
  $("#result").html(chirp(3));
});
