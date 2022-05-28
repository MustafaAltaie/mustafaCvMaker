document.addEventListener('click', function(evt){
    if(evt.target.tagName == 'IMG'){
        if(localStorage.CVAuthorization != 'authorizated')
        window.location.href = '/register';
        else
        window.location.href = evt.target.id;
    }
});
//delete localStorage.CVAuthorization