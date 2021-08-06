const controls = document.querySelector(".controls");
const slicktrack = document.querySelector(".slick-track");
const allBox = slicktrack.children;
const slicktrackWidth = slicktrack.offsetWidth;
const margin = 30;
var items=0;
var totalItems=0;
var jumpSlideWidth=0;

// item setup per slide

responsive = [
    {breakPoint:{width:0, item:1}},
    {breakPoint:{width:400, item:2}},
    {breakPoint:{width:960, item:5}}
]

function load() {
    for(let i=0; i<responsive.length; i++) {
        if(window.innerWidth>responsive[i].breakPoint.width){
            items=responsive[i].breakPoint.item;
        }
    }
}

function start() {
    var totalItemsWidth=0;
    for(let i=0;i<allBox.length;i++){
        // width and margin setup of items
        allBox[i].style.width=(slicktrackWidth/items)-margin + "px";
        allBox[i].style.margin=(margin/2) +"px";
        totalItemsWidth+=slicktrackWidth/items;
        totalItems++;
    }
    slicktrack.style.width=totalItemsWidth + "px";

    const allSlides=Math.ceil(totalItems/items);
    const ul=document.createElement("ul");
    for(let i=1;i<=allSlides;i++){
        const li=document.createElement("li");
            li.id=i;
            li.innerHTML=i;
            li.setAttribute('onclick', 'constrolSlides(this)');
            ul.appendChild(li);
            if(i==1) {
                li.className="active";
            }
    }
    controls.appendChild(ul);
}

//when click number slide to next slide
function constrolSlides(ele) {
    // select controls ul element
    const ul=controls.children;
    // select ul chidren li element
    const li=ul[0].children;
    var active;
    for(let i=0;i<li.length;i++){
        if(li[i].className=="active"){
            // find who is now active
            active=i;
            // remove active class from all li element
            li[i].className="";
        }
    }
    // add active class ro current slide
    ele.className="active";

    var numb=(ele.id-1)-active;
    jumpSlideWidth=jumpSlideWidth+(slicktrackWidth*numb);
    slicktrack.style.marginLeft=-jumpSlideWidth + "px";
}

window.onload=load();
window.onload=start();