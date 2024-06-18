const dropZone = document.querySelector(".drop-zone")
const browseBtn = document.querySelector(".browseBtn");
const fileInput = document.querySelector("#fileInput");

const host = "https://inshare.herokuapp.com/"
const uploadURL = host + "api/files";

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
   uploadFile()

 });


 browseBtn.addEventListener("click",()=> {
     fileInput.click();
 });

 const uploadFile =()=>{
  const files = fileInput.files[0]
  const formData = new FormData();
  formData.append("myFile" ,file);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange= () => {
    console.log(xhr.onreadystate)
  };

  xhr.open("POST" , uploadURL);
  xhr.send(formData)
 };



 