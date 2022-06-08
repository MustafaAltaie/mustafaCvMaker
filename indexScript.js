document.addEventListener('click', function(evt){
    if(evt.target.tagName == 'SPAN'){
        if(localStorage.CVAuthorization != 'authorizated')
        window.location.href = '/register/' + evt.target.id;
        else
        window.location.href = evt.target.id;
    }
});



document.getElementById('sliderSpeedRange').onchange = function(){
    localStorage.sliderSpeedRange = sliderSpeedRange.value;
    window.location.reload();
}

if(localStorage.sliderSpeedRange == undefined)
var sliderSpeed = sliderSpeedRange.value;
else{
    sliderSpeedRange.value = localStorage.sliderSpeedRange;
    var sliderSpeed = localStorage.sliderSpeedRange;
}

document.getElementById('page1').style.transform = 'perspective(1000px) rotateY(20deg)';

for(i = 1; i <= demo2.querySelectorAll('div').length; i++){
    document.getElementById('page' + i).style.zIndex = demo2.querySelectorAll('div').length-i;
    document.getElementById('page' + i).style.transition = sliderSpeed/1000 + 's';
}

var i = 1;
var slideStage = 1;

function slider(){
    if(slideStage == 1){
        document.getElementById('page' + i).style.transform = 'perspective(1000px) rotateY(160deg)';
        i++;
        setTimeout(function(){
            document.getElementById('page' + parseInt(i-1)).style.zIndex = '';
        }, sliderSpeed/2);
        if(i > demo2.querySelectorAll('div').length)
        slideStage = 2;
    }
    else{
        i--;
        document.getElementById('page' + i).style.transform = 'perspective(1000px) rotateY(20deg)';
        document.getElementById('page' + i).style.zIndex = demo2.querySelectorAll('div').length-i;
        if(i == 1)
        slideStage = 1;
    }
}
var sliderInterval = setInterval(slider, sliderSpeed);


document.addEventListener('visibilitychange', function(){
    if(document.hidden){
        clearInterval(sliderInterval);
    }
    else{
        window.location.reload();
    }
});



setInterval(function(){
    demo1.style.filter = 'hue-rotate(' + Math.ceil(Math.random()*360) + 'deg)';
}, 1000);
//delete localStorage.CVAuthorization;