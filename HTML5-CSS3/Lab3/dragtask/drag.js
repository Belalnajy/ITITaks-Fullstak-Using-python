window.addEventListener('load', function () {
    // bin : drop,dragover,dragenter
    bin = document.getElementById('bin');
    bin.addEventListener('drop', dropped);
    bin.addEventListener('dragenter', enterdrag);
    bin.addEventListener('dragover', overdrag);
    // product:dragleave
    product = document.getElementById('product');
    product.addEventListener('dragleave', leavedrag);
    // images:dragstart , dragend
    allimg = document.images;
    for (let i = 0; i < allimg.length; i++) {
        allimg[i].addEventListener('dragstart', startdrag);
        allimg[i].addEventListener('dragend', enddrag);
    }
});//end of load
function startdrag(e) {
    e.dataTransfer.setData("myimg", e.target.outerHTML);
    
}
function enddrag(e) {
    e.preventDefault();
    e.target.style.display = "none";
 
    checkIfEmpty();

}
function dropped(e) {
    e.preventDefault();
    bin.innerHTML += e.dataTransfer.getData("myimg");
}
function overdrag(e) {
    e.preventDefault();
}
function leavedrag(e) {
    e.preventDefault();
}
function enterdrag(e) {
    e.preventDefault();
    bin.style.backgroundColor = "red";
}
function checkIfEmpty() {
    const product = document.getElementById('product');
    const images = product.querySelectorAll('img');
    if (images.length === 0 || Array.from(images).every(img => img.style.display === "none"))
     { product.innerHTML = `<h1>Empty</h1>`}};