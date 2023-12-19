$(document).ready(function () {

  $('.slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $("#popupbox button").on('click', function () {
        $("#popupbox").hide();
        $("#slide").css({"margin-top":"175px"})
  });



  $("input:text").on('input', function () {
    var inputValue = $(this).val();

    if (!inputValue) {
        $(".searchbox button").hide();
    } else {
        $(".searchbox button").show();
    }
});

$(".searchbox button").on('click', function () {
  $(".searchbox button").hide();
  $(".searchbox input:text").focus();
})
 



$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#top').fadeIn(200);
    $('#news').fadeOut();
  } else {
    $('#top').fadeOut('slow');
    $('#news').fadeIn();
  }
});
$('#top').click(function (e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 1000);
});















});

