//Add some variables
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

//Add event in input-field
inputFile.addEventListener("change", uploadImage);

//define upload image function
function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.file[0]);
}