getFirstSelector = (selector)=>{
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let grandNodes = document.querySelectorAll('#grand-node div');
  return grandNodes[grandNodes.length - 1];
}

function increaseRankBy(n){
  let rankLists = document.querySelectorAll('.ranked-list li')
  for (let list of rankLists){
    // console.log(list);
    list.innerHTML = parseInt(list.innerHTML)+n;
  }
}
