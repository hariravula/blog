(function() {
    'use strict';
    window.onscroll = function() { 
        adjustTopSection(); 
    };

    //var pagerTop = document.getElementsByClassName("pager top");
    var topSection = document.getElementById("top-section");
    var altTopSection = document.getElementById('alt-top-section');
    var sticky = topSection.offsetTop + topSection.offsetHeight - 10;


    function adjustTopSection() {
        console.log('window.pageYOffset: ' + window.pageYOffset + ' , sticky: ' + sticky);
        if (window.pageYOffset > sticky) {
            altTopSection.style.display = 'block';
            altTopSection.classList.add("sticky");
            //pagerTop[0].style.display = 'none';
            //topSection.style.display = 'none';
        } else {
            altTopSection.style.display = 'none';
            altTopSection.classList.remove("sticky");
            //topSection.style.display = 'block';
            //pagerTop[0].style.display = 'block';
        }
    }

})();