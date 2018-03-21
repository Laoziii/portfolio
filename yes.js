var picInd = 1;
showPic(picInd);

function conPic(n){
    showPic(picInd += n);
}

function curPic(n){
    showPic(picInd = n);
}

function showPic(n){
    var i;
    var photo = document.getElementsByClassName("gal");
    var view = document.getElementsByClassName("view");
    
    if (n > photo.length) {picInd = 1}
    
    if (n < 1) {picInd = photo.length}
    
    for (i = 0; i < photo.length; i++){
        photo[i].style.display = "none";
    }
    
    for (i = 0; i < view.length; i++) {
        view[i].className = view[i].className.replace(" active", "");
    }
    
    photo[picInd-1].style.display = "block";
    view[picInd-1].className += " active";
}