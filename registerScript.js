function authorize(){
    if(code.value != ''){
        window.location.href = '/authorization/' + code.value;
        if(localStorage.authorizeFailTimes == '' || localStorage.authorizeFailTimes == undefined)
        localStorage.authorizeFailTimes = 1;
        else
        localStorage.authorizeFailTimes ++; 
    }
}
if(localStorage.authorizeFailTimes > 5){
    document.getElementsByTagName('button')[0].style.display = 'none';
    code.style.display = 'none';
    document.getElementsByTagName('h2')[0].innerHTML = 'Too many failed attempts!<br>Contact us to solve the problem<br>Mobile: 0725255471';
    document.getElementsByTagName('h2')[0].style.color = '#f22';
}
if(localStorage.CVAuthorization == 'authorizated')
window.location.href = '/';