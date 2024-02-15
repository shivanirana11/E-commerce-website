const Bar= document.getElementById("bar");
const Close= document.getElementById("close");
const nav= document.getElementById("navbar");

if(Bar){
  Bar.addEventListener("click", () =>{
  nav.classList.add("active");
})
}
if(Close){
    Bar.addEventListener("click", () =>{
    nav.classList.remove("active");
  })
  }


