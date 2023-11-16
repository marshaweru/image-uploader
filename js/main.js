//Add some variables
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

//Add event in input-field
inputFile.addEventListener("change", uploadImage);

//define upload image function
function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`
    imageView.textContent = "";
}
//In above code, second-last line img link will be added as img view as a background
//In the last line we remove the text and icon
