function myFunction(x) {
    $("#menu").toggleClass("open");
    x.classList.toggle("change");

    // if($("#menu").position().left <0){
    //     $("#menu").animate({
    //         transform: "translateY(0px)"
    //     });
    //     console.log("si");
    // }
    // else{
    //     $("#menu").animate({
    //         left: '-100vw'
    //     });
    // }

  }

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.producto');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}

function soldoutalert() {
    alert("SOLD OUT, BITCH");
}
  