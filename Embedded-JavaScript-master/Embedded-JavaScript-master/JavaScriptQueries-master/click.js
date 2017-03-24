//declare samecolor() here
function samecolor(){
  const doc = document;
  let divs = doc.querySelectorAll("#samecolor > div"); //array
  for(let i = 0;i<divs.length;i++){
    divs[i].style.backgroundColor ="#f00";
  }
}
//declare diffcolor() here
