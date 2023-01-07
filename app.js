// Smooth scroll to anchors
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// Toggle navbar dropdown on hover
$('.navbar .dropdown').hover(function () {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function () {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
});

// Toggle navbar dropdown on click (for small screens)
$('.navbar .dropdown > a').click(function () {
  if ($(window).width() < 768) {
    $(this).parent().find('.dropdown-menu').first().stop(true, true).slideToggle();
  }
});

// Change navbar color on scroll
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('navbar-scrolled');
  } else {
    $('.navbar').removeClass('navbar-scrolled');
  }
});

// Hide navbar dropdown when clicked (for small screens)
$('.navbar .dropdown-menu').click(function () {
  if ($(window).width() < 768) {
    $('.navbar-toggler').click();
  }
});

// Change portfolio item caption color on hover
$('.portfolio-item').hover(function () {
 
