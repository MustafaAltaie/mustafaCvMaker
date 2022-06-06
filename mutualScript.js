function screenShot(){
    html2canvas(document.getElementById('cv'), {
        onrendered: function(canvas){
            return Canvas2Image.saveAsJPEG(canvas);
        }
    });
    db();
}

function db(){
    clientNameText.value = localStorage.clientName;
    clientEmailText.value = sessionStorage.clientEmail;
    clientNumberText.value = localStorage.clientNumber;
    clientTitleText.value = localStorage.clientTitle;
    clientAddressText.value = localStorage.clientAddress.replace('/', ' ');
    clientProfileText.value = localStorage.clientProfile;
    mySocialMediaTitleText.value = localStorage.mySocialMediaTitle;
    mySocialMediaTextText.value = localStorage.mySocialMediaText;
    referenceTitleText.value = localStorage.referenceTitle;
    languageTitleText.value = localStorage.languageTitle;
    experiencesText.value = localStorage.experiences;
    educationsText.value = localStorage.educations;
    skillsText.value = localStorage.skills;
    hobbyText.value = localStorage.hobby;
    newCVSubmit.click();
}

if(document.querySelectorAll('#_IdDB').length != 0){
    _idText.value = _IdDB.value;
    localStorage.clientName = clientNameDB.value;
    sessionStorage.clientEmail = clientEmailDB.value;
    localStorage.clientNumber = clientNumberDB.value;
    localStorage.clientTitle = clientTitleDB.value;
    localStorage.clientAddress = clientAddressDB.value.replace(' ', ' /');
    localStorage.clientProfile = clientProfileDB.value;
    localStorage.mySocialMediaTitle = mySocialMediaTitleDB.value;
    localStorage.mySocialMediaText = mySocialMediaTextDB.value;
    localStorage.referenceTitle = referenceTitleDB.value;
    localStorage.languageTitle = languageTitleDB.value;
    localStorage.experiences = experiencesDB.value;
    localStorage.educations = educationsDB.value;
    localStorage.skills = skillsDB.value;
    localStorage.hobby = hobbyDB.value;
    login.style.display = 'none';
    updateAllInfo.style.display = 'block';
    deleteUser.style.display = 'block';
}
else{
    if(window.location.href.includes('@'))
    window.history.back();
}


document.getElementById('loginButton').onclick = function(){
    if(loginText.value != '')
    getData();
}

function getData(){
    window.location.href = '/' + loginText.value + '/' + cvName.value;
}

document.addEventListener('click', function(evt){
    if(evt.target.id != 'login' && evt.target.id != 'loginText' && evt.target.id != 'loginButton'){
        loginText.style.transform = 'translateY(0%)';
            loginButton.style.transform = 'translateY(0%)';
    }
});

nav.addEventListener('click', function(evt){
    if(evt.target.tagName == 'H9' || evt.target.tagName == 'IMG'){
        if(evt.target.id == 'saveCv')
        screenShot();

        if(evt.target.id == 'login'){
            loginText.style.transform = 'translateY(130%)';
            loginButton.style.transform = 'translateY(130%)';
            loginText.focus();
        }

        if(evt.target.id == 'changeText')
        pSizeRange.style.display = 'block';
        else
        pSizeRange.style.display = 'none';

        if(evt.target.id == 'changeCvSize')
        cvSizeRange.style.display = 'block';
        else
        cvSizeRange.style.display = 'none';

        if(evt.target.id == 'deleteUser'){
            if(confirm('Are you sure you want to delete all user data?') == true)
            window.location.href = '/deleteUser/' + _idText.value + '/' + cvName.value;
        }

        if(evt.target.id == 'updateAllInfo')
        db();
    }

    if(evt.target.id == 'home')
    window.location.href = '/';
});




// ----------------- Personal Image ----------------- //

document.getElementById('changeImage').onclick = function(){
    if(sessionStorage.clientEmail == undefined || sessionStorage.clientEmail == ''){
        alert('Enter email address first!');
        clientEmail.click();
        editText.select();
    }
    else
    imageFile.click()
}



document.addEventListener('click', function(evt){
    if(evt.target.parentNode.id != 'nav'){
        cvSizeRange.style.display = 'none';
        pSizeRange.style.display = 'none';
    }

    if(evt.target.id == 'actionButton'){
        if(currentElement == 'clientEmail')
        if(editText.value.includes('@')){
            if(editText.value.includes('gmail')
            || editText.value.includes('yahoo')
            || editText.value.includes('hubSpo')
            || editText.value.includes('sendinblue')
            || editText.value.includes('aweber')
            || editText.value.includes('protonMail')
            || editText.value.includes('outlook')
            || editText.value.includes('zoho')
            || editText.value.includes('aol')
            || editText.value.includes('gmx')
            || editText.value.includes('icloud'))
            document.getElementById(currentElement).innerHTML = editText.value;
            else{
                alert('Email is not valid');
                document.getElementById(currentElement).innerHTML = 'emailaddress@example.com';
            }
        }
        else{
            alert('Email is not valid');
            document.getElementById(currentElement).innerHTML = 'emailaddress@example.com';
        }
        setTimeout(function(){
            if(clientEmail.innerHTML == 'emailaddress@example.com')
            delete sessionStorage.clientEmail;
        }, 10);
    }
});


var imageExt = '.jpg,.JPG,jpeg,JPEG,.bmp,.BMP,.gif,.GIF,.png,.PNG';

var uploadPerm = 0;
var rndNumber;

document.getElementById('imageFile').onchange = function(){
    if(imageFile.value != ''){
        for(i = 0; i < imageExt.split(',').length; i++){
            if(imageFile.value.substr(imageFile.value.length-4, imageFile.value.length) == imageExt.split(',')[i]){
                uploadPerm = 1;
                break;
            }
            else uploadPerm = 0;
        }
        if(uploadPerm == 0) alert('File is not image');
        else{
            if(changeImage.innerHTML == 'Add image'){
                localStorage.imageName = clientEmail.innerHTML;
                imageFileName.value = clientEmail.innerHTML;
                imageUploadSubmit.click();
            }
            else{
                imageFileName.value = sessionStorage.clientEmail;
                imageUploadSubmit.click();
            }
        }
    }
}

document.getElementById('removeImage').onclick = function(){
    window.location.href = '/deleteImage/' + localStorage.imageName + '/' + cvName.value;
    delete localStorage.imageName;
}

localStorage.clear();
sessionStorage.clear();