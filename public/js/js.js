const colors=["#6495ed","#7fffd4","#ffa07a","#f08080","#afeeee"];
 let i = 0
 const container = document.querySelector(".container");

Array.from(document.querySelectorAll(".nav-but")).forEach((item)=>{
    item.onclick = ()=>{
        item.parentElement.parentElement.classList.toggle("changes");
    };
});

Array.from(document.querySelectorAll(".nav-link")).forEach((item)=>{
      item.style.cssText =`background-color:${colors[i++]}`;
 })
 
 document.querySelector(".open-navbar-icon").addEventListener("click",()=>{
  container.classList.add("change");
 });
 document.querySelector(".close-navbar-icon").addEventListener("click",()=>{
    container.classList.remove("change");
   });  