const PATH = 'images/'

const getImageBtn = document.getElementById('get-image-btn');
const imageList = document.getElementById('imageList');
let countItems = 0;

let focusFlag = false;

function addImage(event) {
    event.preventDefault()
    const imageItem = document.createElement('li');

    imageItem.innerHTML = `
    <img class = "cosmos-image" id = "${countItems + 1}" src="${PATH}${countItems + 1}.jpg" onclick = "imageFocus(this)" alt="cosmos${countItems + 1}">
    `
    imageList.append(imageItem)
    countItems++;

}

function imageFocus(image) {
    const imgNodes = document.querySelectorAll('.cosmos-image');
    imgNodes.forEach(node => {
        node.style.transform = "scale(1)";
        node.style.boxShadow = "none";
    });

    var currentSize = image.style.transform;
    if (!currentSize || currentSize === "scale(1)") {
        image.style.transform = "scale(1.2)"; 
        image.style.boxShadow = "0px 0px 300px 600px rgba(0,0,0,0.7)";
    } else {
        image.style.transform = "scale(1)";
        image.style.boxShadow = "none";

    }


}

function bgClick(event) {
    const withinBoundaries = event.composedPath().includes(imageList)
    if (!withinBoundaries) {
        const imgNodes = document.querySelectorAll('.cosmos-image');
        imgNodes.forEach(node => {
            node.style.transform = "scale(1)";
            node.style.boxShadow = "none";
        });
    }
}

document.addEventListener('click', bgClick)

getImageBtn.addEventListener('click', addImage)

