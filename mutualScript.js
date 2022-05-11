function sizingAllCv(n){
    cv.style.width = n + 'px';
    cv.style.height = n * 1.414285714285714 + 'px';
    for(i = 0; i < document.querySelectorAll('p').length; i++)
    document.getElementsByTagName('p')[i].style.fontSize = cv.offsetWidth/50.68965517241379 + 'px';
    for(i = 0; i < document.querySelectorAll('b').length; i++)
    document.getElementsByTagName('b')[i].style.fontSize = cv.offsetWidth/50.68965517241379 + 'px';
    for(i = 0; i < document.querySelectorAll('h3').length; i++){
        document.getElementsByTagName('h3')[i].style.fontSize = cv.offsetWidth/42 + 'px';
    }
    for(i = 0; i < document.querySelectorAll('h1').length; i++)
    document.getElementsByTagName('h1')[i].style.fontSize = cv.offsetWidth/21 + 'px';
    for(i = 0; i < document.querySelectorAll('a').length; i++)
    document.getElementsByTagName('a')[i].style.fontSize = cv.offsetWidth/24.5 + 'px';
    for(i = 0; i < document.querySelectorAll('.clientLanguagePoint').length; i++){
        document.getElementsByClassName('clientLanguagePoint')[i].style.width = cv.offsetWidth/98 + 'px';
        document.getElementsByClassName('clientLanguagePoint')[i].style.height = cv.offsetWidth/98 + 'px';
    }
    for(i = 0; i < contactSection.querySelectorAll('IMG').length; i++){
        contactSection.getElementsByTagName('img')[i].style.width = cv.offsetWidth/29.4 + 'px';
        contactSection.getElementsByTagName('img')[i].style.height = cv.offsetWidth/29.4 + 'px';
    }
    for(i = 0; i < document.querySelectorAll('.experiencePoint').length; i++){
        document.getElementsByClassName('experiencePoint')[i].style.width = cv.offsetWidth/98 + 'px';
        document.getElementsByClassName('experiencePoint')[i].style.height = cv.offsetWidth/98 + 'px';
    }
    for(i = 0; i < document.querySelectorAll('.educationPoint').length; i++){
        document.getElementsByClassName('educationPoint')[i].style.width = cv.offsetWidth/98 + 'px';
        document.getElementsByClassName('educationPoint')[i].style.height = cv.offsetWidth/98 + 'px';
    }
    for(i = 0; i < document.querySelectorAll('.skillDivWrapper').length; i++)
    document.getElementsByClassName('skillDivWrapper')[i].style.height = cv.offsetWidth/147 + 'px';
    for(i = 0; i < document.querySelectorAll('.hobbyPoint').length; i++){
        document.getElementsByClassName('hobbyPoint')[i].style.minWidth = cv.offsetWidth/98 + 'px';
        document.getElementsByClassName('hobbyPoint')[i].style.minHeight = cv.offsetWidth/98 + 'px';
    }
}

