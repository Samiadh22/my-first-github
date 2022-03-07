
let clickcount = 0;
let total = [];
let timesClickedheart = 0;
let btnPlus = document.getElementsByClassName("fa-plus-circle");
let btnMinus = document.getElementsByClassName("fa-minus-circle");

for (let i of btnPlus) {
  i.addEventListener("click", function(){
    console.log(this)
    if( Number(!this?.nextElementSibling?.innerText)) return;
       Number(this.nextElementSibling.innerText)
    this.nextElementSibling.innerText++
    let qtn = Number(this.parentNode.parentNode.getElementsByClassName("price")[0].innerText);
    let nameProduct = this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");
    total[nameProduct] = qtn * Number(this.nextElementSibling.innerText);
    document.getElementById("total").innerText = total.reduce((acc, item) => acc + item, 0);
  })
}

for (let i of btnMinus) {
  i.addEventListener("click", function(){
    if( Number(!this?.previousElementSibling?.innerText)) return;
    this.previousElementSibling.innerText--;
    if(Number(this.previousElementSibling.innerText) <= 0){
      this.previousElementSibling.innerText = 0;
    }
    let qtn = Number(this.parentNode.parentNode.getElementsByClassName("price")[0].innerText)
    let nameProduct = this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");
    total[nameProduct] = qtn * Number(this.previousElementSibling.innerText);
    document.getElementById("total").innerText = total.reduce((acc, item) => acc + item, 0);
  })
}

for (let index = 0; index < document.getElementsByClassName("fa-heart").length; index++) {
  document.getElementsByClassName("fa-heart")[index].onclick = function() { 
    timesClickedheart++;
    if (timesClickedheart>1) {
    this.classList.remove("fa-heart-myfav");
    timesClickedheart = 0;
  } else {
    this.classList.add("fa-heart-myfav");
  }
  };
}
    
for (let index = 0; index < document.getElementsByClassName("fa-trash-alt").length; index++) {
  document.getElementsByClassName("fa-trash-alt")[index].onclick = function() { 
    this.parentNode.parentNode.parentNode.parentNode.remove();
    let qtn = Number(this.parentNode.parentNode.getElementsByClassName("price")[0].innerText);
    let nameProduct = this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");
    total[nameProduct] = qtn * Number(this.nextElementSibling.innerText);
    document.getElementById("total").innerText = total.reduce((acc, item) => acc + item, 0);
  };
}
    
