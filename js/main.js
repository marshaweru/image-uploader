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
    imageView.style.border = 0;
}
//In above code, third-last line img link will be added as img view as a background
//In the second-last line we remove the text and icon
//In the last line we remove the border
