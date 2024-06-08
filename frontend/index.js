const dropZone = document.querySelector(".drop-zone")
const browseBtn = document.querySelector(".browseBtn");
const fileInput = document.querySelector("#fileInput");

dropZone.addEventListener("dragover", (e)=>{
    e.preventDefault()
    if (!dropZone.classList.contains("dragged")){
    } 
 });
 dropZone.addEventListener("dragleave",()=>{
    dropZone.classList.remove("dragged")
 })

 dropZone.addEventListener("drop", (e) =>{
   e.preventDefault();
   dropZone.classList.remove("dragged") ;
   const files = e.dataTransfer.files
   console.log(files);
   fileInput.files = files;
 });


 browseBtn.addEventListener("click",()=>{
     fileInput.click()
 })