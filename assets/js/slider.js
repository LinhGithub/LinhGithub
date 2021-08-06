
//tu dong chuyen anh slider
var index = 0;
var imgs = [];
    imgs[0] = "./assets/imgs/slider_1.png";
    imgs[1] = "./assets/imgs/slider_2.png";
changeImage = function(){
    index++;
    if(index == 1) {
        document.getElementById("prev").style.backgroundColor = "#fff";
        document.getElementById("prev").style.width = "9px";
        document.getElementById("prev").style.height = "9px";

        document.getElementById("next").style.backgroundColor = "#03a9f4";
        document.getElementById("next").style.width = "10px";
        document.getElementById("next").style.height = "10px";
    }

    if(index >= 2) {
        index = 0;

        document.getElementById("next").style.backgroundColor = "#fff";
        document.getElementById("next").style.width = "9px";
        document.getElementById("next").style.height = "9px";

        document.getElementById("prev").style.backgroundColor = "#03a9f4";
        document.getElementById("prev").style.width = "10px";
        document.getElementById("prev").style.height = "10px";
    }

    document.getElementById("img").src = imgs[index];
}
setInterval(changeImage, 6000);

//chuyen anh theo nut slider
var slider_img = document.getElementById("img");
var i = 0;
var images = ["slider_1.png", "slider_2.png"];

function prev(){
    i=0;
    document.getElementById("next").style.backgroundColor = "#fff";
    document.getElementById("next").style.width = "9px";
    document.getElementById("next").style.height = "9px";

    document.getElementById("prev").style.backgroundColor = "#03a9f4";
    document.getElementById("prev").style.width = "10px";
    document.getElementById("prev").style.height = "10px";
    return setImg();

}

function next(){
    i=1;
    document.getElementById("prev").style.backgroundColor = '#fff';
    document.getElementById("prev").style.width = "9px";
    document.getElementById("prev").style.height = "9px";

    document.getElementById("next").style.backgroundColor = "#03a9f4";
    document.getElementById("next").style.width = "10px";
    document.getElementById("next").style.height = "10px";
    return setImg();
}

function setImg() {
    return slider_img.setAttribute("src", "./assets/imgs/" + images[i]);
}