if(window.matchMedia('(min-width: 1024px)').matches)
document.body.style.zoom = "15%";
else{
    document.body.style.zoom = "5%";
    cvSizeRange.min = 3000
    cvSizeRange.max = 8000
}

// --------------- Get CV size from localStorage -------------//

if(localStorage.cvSize != '' || localStorage.cvSize != undefined)
cvSizeRange.value = localStorage.cvSize;
else
cvSizeRange.value = 3000;