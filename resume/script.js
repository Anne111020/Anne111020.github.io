// Func to handle button animation
const button = document.querySelector(".button");
button.addEventListener("click", () =>{
  button.classList.add("active");
  button.querySelector("i").classList.remove("bx-cloud-download","bx-check-circle")
  button.querySelector("span").innerText = "";
  setTimeout(()=>{
    button.classList.remove("active");
    button.querySelector("i").classList.add("bx-check-circle")
    button.querySelector("span").innerText = "Completed";
  },6000);
});