
function details(id) {
    var div = document.getElementById(id);
    if (div.style.display === "none") {
    div.style.display = "block";
    fadeIn(div,3000);
    //zoomtext(id); 
    } 
    else {
    div.style.display = "none";
    }
}

function alterner(id){
    if(id=='stg1'){
        details('stg1');
        document.getElementById('stg2').style.display = 'none';
        //zoomtext('stg1txt');
    }
    else {
        details('stg2');
        document.getElementById('stg1').style.display = 'none';
        //zoomtext('stg2txt');
    }    
}


function fadeIn(el, time) {
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
            setTimeout(tick, 16);
        }
    };
    tick();
}


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});



