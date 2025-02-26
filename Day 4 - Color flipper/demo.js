const color = document.getElementById("color");
const wrap = document.getElementById("wrap");
const btn =  document.getElementById("btn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C" ,"D" , "E" , "F"];

btn.addEventListener('click',function(){
      let hexcolor = "#";
      for(let i=1;i<=6;i++){
        hexcolor = hexcolor + randomHexValue();
      }
      wrap.style.backgroundColor = hexcolor
      color.innerHTML = hexcolor
})




function randomHexValue(){

    let randomIndex = Math.floor(Math.random()*16);
    return hex[randomIndex];

}
