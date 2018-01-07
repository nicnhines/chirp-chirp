function chirp(n){
  //base case
  console.log(n);
  if( n === 1){
    return ' chirp';
  } else {
   return ' chirp' + chirp(--n);
  }
}



$(document).ready(function(){
  $("#result").html(chirp(3));
});