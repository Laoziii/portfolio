var picInd = 1;
showPic(picInd);

function conPic(n){
    showPic(picInd += n);
}

function curPic(n){
    showPic(picInd = n);
}

function showPic(n){
    var photo = document.getElementsByClassName("gal");
    var view = document.getElementsByClassName("view");
    
    
}