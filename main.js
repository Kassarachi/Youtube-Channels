$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


var first_item = $('.first_item');
first_item.owlCarousel();

$('.first_slide_btn_prev').click(function() {
    first_item.trigger('next.owl.carousel');
})
$('.first_slide_btn_next').click(function() {

    first_item.trigger('prev.owl.carousel');
})
var second_item = $('.second_item');
second_item.owlCarousel();

$('.second_slide_btn_prev').click(function() {
    second_item.trigger('next.owl.carousel');
})
$('.second_slide_btn_next').click(function() {

    second_item.trigger('prev.owl.carousel');
});


$('.search_button').click(function() {
    $('.search_box').toggleClass('d-none');

});

$('.mobile_toggler').click(function() {

    $('.content').toggleClass('sidebar_active')

});