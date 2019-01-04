

$('#topnavbar').affix({
    offset: {
        top: $('#banner').height()
    }
});




$('.col-md-1').addClass('col-sm-1');
$('.col-md-1').removeClass('col-md-1');

$('.col-md-2').addClass('col-sm-2');
$('.col-md-2').removeClass('col-md-2');

$('.col-md-3').addClass('col-sm-3');
$('.col-md-3').removeClass('col-md-3');

$('.col-md-4').addClass('col-sm-4');
$('.col-md-4').removeClass('col-md-4');

$('.col-md-5').addClass('col-sm-5');
$('.col-md-5').removeClass('col-md-5');

$('.col-md-6').addClass('col-sm-6');
$('.col-md-6').removeClass('col-md-6');

$('.col-md-8').addClass('col-sm-8');
$('.col-md-8').removeClass('col-md-8');

$('.col-md-10').addClass('col-sm-10');
$('.col-md-10').removeClass('col-md-10');

$('.col-md-12').addClass('col-sm-12');
$('.col-md-12').removeClass('col-md-12');

$(".btn").addClass("new-btn");
$(".navbar").addClass("navbar-static-top");



if($(window).width() < 1000){
  	$(".1br").remove();
	$(".2br").remove();
	$(".3br").remove();
}
else{
	$(".special-topic").remove();
}


$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

$("a").addClass("animsition-link");

