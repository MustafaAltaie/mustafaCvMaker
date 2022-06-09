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

document.getElementById('sliderfold1Range').onchange = function(){
    localStorage.sliderfold1Range = sliderfold1Range.value;
    window.location.reload();
}

document.getElementById('sliderfold2Range').onchange = function(){
    localStorage.sliderfold2Range = sliderfold2Range.value;
    window.location.reload();
}

if(localStorage.sliderSpeedRange == undefined)
var sliderSpeed = sliderSpeedRange.value;
else{
    sliderSpeedRange.value = localStorage.sliderSpeedRange;
    var sliderSpeed = localStorage.sliderSpeedRange;
}

if(localStorage.sliderfold1Range == undefined)
var foldRight = sliderfold1Range.value;
else{
    sliderfold1Range.value = localStorage.sliderfold1Range;
    var foldRight = localStorage.sliderfold1Range;
}

if(localStorage.sliderfold2Range == undefined)
var foldLeft = sliderfold2Range.value;
else{
    sliderfold2Range.value = localStorage.sliderfold2Range;
    var foldLeft = localStorage.sliderfold2Range;
}

for(i = 1; i <= demo2.querySelectorAll('div').length; i++){
    document.getElementById('page' + i).style.zIndex = demo2.querySelectorAll('div').length-i;
    document.getElementById('page' + i).style.transform = 'perspective(1000px) rotateY(' + parseInt(foldLeft-i*1) + 'deg)';
    document.getElementById('page' + i).style.transition = sliderSpeed/1000 + 's';
}

var i = 1;
var slideStage = 1;
var stage1Play = 0;
var stage2Play = 0;

function slider(){
    if(slideStage == 1){
        setTimeout(function(){
            stage1Play = 1;
        }, 2000);
        if(stage1Play == 1){
            document.getElementById('page' + i).style.transform = 'perspective(1000px) rotateY(' + parseInt(foldRight-i*1) + 'deg)';
            i++;
            setTimeout(function(){
                document.getElementById('page' + parseInt(i-1)).style.zIndex = '';
            }, sliderSpeed/2);
            if(i > demo2.querySelectorAll('div').length)
            slideStage = 2;
            stage2Play = 0;
        }
    }
    else{
        setTimeout(function(){
            stage2Play = 1;
        }, 2000);
        if(stage2Play == 1){
            i--;
            document.getElementById('page' + i).style.transform = 'perspective(1000px) rotateY(' + parseInt(foldLeft-i*1) + 'deg)';
            document.getElementById('page' + i).style.zIndex = demo2.querySelectorAll('div').length-i;
            if(i == 1)
            slideStage = 1;
            stage1Play = 0;
        }
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



// setInterval(function(){
//     demo1.style.filter = 'hue-rotate(' + Math.ceil(Math.random()*360) + 'deg)';
// }, 1000);
//delete localStorage.CVAuthorization;