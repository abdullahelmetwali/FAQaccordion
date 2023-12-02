let plus = document.querySelectorAll(".addRem")
for(i=0;i<=3;i++){
   let thePlus = plus[i].firstElementChild
   let theMinus = plus[i].lastElementChild
   let theAnswer = plus[i].nextElementSibling
thePlus.addEventListener("click",function(){
   thePlus.classList.add("dispnone")
   theMinus.classList.add("dispblock")
   theAnswer.classList.add("dispblock")

})
theMinus.addEventListener("click",function(){
   thePlus.classList.remove("dispnone")
   theMinus.classList.remove("dispblock")
   theAnswer.classList.remove("dispblock")
})
}
