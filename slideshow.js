var picInd = 0;
showPic();

function showPic(){
    var slide = document.getElementsByClassName("gal");
    
    for (var i = 0; i < slide.length;i++) {
        slide[i].style.display = "none";
    }
    picInd++
    
    if (picInd > slide.length) {
        picInd = 1;
    }
    
    slide[picInd-1].style.display = "block";
    setTimeout(showPic, 3000);
}