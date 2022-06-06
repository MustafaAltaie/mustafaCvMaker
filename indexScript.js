document.addEventListener('click', function(evt){
    if(evt.target.tagName == 'SPAN'){
        if(localStorage.CVAuthorization != 'authorizated')
        window.location.href = '/register/' + evt.target.id;
        else
        window.location.href = evt.target.id;
    }
});
setInterval(function(){
    document.getElementsByTagName('body')[0].style.filter = 'hue-rotate(' + Math.ceil(Math.random()*360) + 'deg)';
}, 1000);
//delete localStorage.CVAuthorization;