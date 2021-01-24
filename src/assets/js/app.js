import $ from 'jquery';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

$('.burger').click(function() {
    $(this).toggleClass('activeBurger')
    $('nav').toggleClass('activeNav')
})


$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 1024px)");

    if (isMobile.matches) {
        $('.menu>div.menu_item').click(function() {
            $(this).parent().toggleClass('itemActive')
        })
    }
 });