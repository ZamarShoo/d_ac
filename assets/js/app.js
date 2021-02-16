$('.burger').click(function() {
    $(this).toggleClass('activeBurger')
    $('nav').toggleClass('activeNav')
})

$('.price-head').on("click", function() {
    $(this).toggleClass('activePrice')
})

$( document ).ready(function() { 
    let service = document.getElementById('serviceWrapper')
    let elem1 = service.children[0]
    let elem3 = service.children[2]
    let elem8 = service.children[7]
    let elem9 = service.children[8]
    elem1.insertAdjacentHTML("afterEnd", `<div class="service-elem elem-disable elem-disable-0"></div>`);
    elem3.insertAdjacentHTML("afterEnd", `<div class="service-elem elem-disable elem-disable-1"></div>`);
    elem8.insertAdjacentHTML("afterEnd", `<div class="service-elem elem-disable elem-disable-2"></div>`);
    elem9.insertAdjacentHTML("afterEnd", `<div class="service-elem elem-disable elem-disable-2 elem-disable-3"></div>`);
})


$( document ).ready(function() {
    let ind = document.getElementById('indexWrapper')
    let elem = ind.children[0]
    elem.insertAdjacentHTML("afterEnd", `<div class="service-elem elem-disable elem-disable-0"></div>`);
})


$( document ).ready(function() {

    $('.list-services').hide()
    $('.sub-service-info>*').hide()
    $('.sub-service-info>*:nth-child(1), .sub-service-info>*:nth-child(2), .sub-service-info>*:nth-child(3), .sub-service-info>*:last-child').show()

    $('#uzn').on("click", function() {
        $('.list-services').show()
        $(this).hide()
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".list-services").offset().top
        }, 700);
    })

    $('#sver').on("click", function() {
        $('.list-services').hide()
        $('#uzn').show()
    })

    $('.subLink').on("click", function() {
        if(!$(this).hasClass('activeSubLink')) {
            $('.sub-service-info>*').show()
            $(this).addClass('activeSubLink')
            $(this).html('Свернуть')
        }
        else {
            $('.sub-service-info>*').hide()
            $('.sub-service-info>*:nth-child(1), .sub-service-info>*:nth-child(2), .sub-service-info>*:nth-child(3), .sub-service-info>*:last-child').show()
            $('.subLink').removeClass('activeSubLink')
            $('.subLink').html('Узнать больше')
        }
    })

})
$( document ).ready(function() {
    $('.last-section>*').hide()
    $('.last-section>*:nth-child(1), .last-section>*:nth-child(2), .last-section>*:nth-child(3), .last-section>*:last-child').show()

    $('.lastLink').on("click", function() {
        if(!$(this).hasClass('activeiLink')) {
            $('.last-section>*').show()
            $(this).addClass('activeiLink')
            $(this).html('Свернуть')
        }
        else {
            $('.last-section>*').hide()
            $('.last-section>*:nth-child(1), .last-section>*:nth-child(2), .last-section>*:nth-child(3), .last-section>*:last-child').show()
            $(this).removeClass('activeiLink')
            $(this).html('Узнать больше')
        }
    })
})

$('.first-slide-gallery').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    lazyLoad: true
})

$('.nav-act>a:first-child').on("click", function(){
    $('.gallery-act').trigger('prev.owl.carousel');   
})

$('.nav-act>a:last-child').on("click", function(){
    $('.gallery-act').trigger('next.owl.carousel');   
})


$('.gallery-about-wrapper').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    items:1,
    lazyLoad: true
})


$('.navigationUnderGallery > a:first-child').on("click", function() {
    $('.gallery-about-wrapper').trigger('prev.owl.carousel');  
})

$('.navigationUnderGallery > a:last-child').on("click", function() {
    $('.gallery-about-wrapper').trigger('next.owl.carousel');  
})

$('.sticky').on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
})

const circle = document.getElementById('progress-circle')
const r = 16
const circumference = 2 * Math.PI * r

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference

let reload = false

function animate(persent) {

    setTimeout(function() {
        let re = reload
        let offset = circumference - persent / 100 * circumference
        circle.style.strokeDashoffset = offset

        if (re) {
            circle.style.strokeDashoffset = 100
            reload = false
            animate(0)
            return false
        }
        if(persent == 100) {
            circle.style.strokeDashoffset = 100
            reload = false
            animate(0)
            return false
        }
    
        if (!re){
            reload = false
            animate(persent+1)
            return false
        } else {
            circle.style.strokeDashoffset = 100
            animate(0, true)
            return false
        }
    }, 60)
}
animate(0)

$('#owlNav > .next-nav').on("click", function() {
    $('.first-slide-gallery').trigger('next.owl.carousel'); 
    reload = true
    animate(0)
})

$('#owlNav > .pre-nav').on("click", function() {
    $('.first-slide-gallery').trigger('prev.owl.carousel'); 
    reload = true
    animate(0)
})

$('.first-slide-gallery .owl-dot').on("click", function() {
    reload = true
    animate(0)
})


    $('.gallery-act').owlCarousel({
        nav:false,
        dots:false,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                autoWidth: false
            },
            700: {
                items: 2,
                margin: 20,
                autoWidth: false
            },
            1230: {
                items: 3,
                margin: 30,
                autoWidth: true
            }
        }
    })   

$( window ).resize(function() {
let elemL = document.getElementById('section').getBoundingClientRect().left
document.getElementById('sectionG').style.marginLeft= `${elemL.toFixed(0)}px`
})


$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 1024px)");

    if (isMobile.matches) {
        $('.menu>div.menu_item').click(function() {
            $(this).parent().toggleClass('itemActive')
        })
    }
 });

 function inputNumber() {
     console.log("eee")
     
 }

 $('.popup-close').click(function() {
     $('.popup-wrapper, .popup-priem, .popup-zayavk, .popup-priem-thanks, .popup-zayavk-thanks').hide();
 })

 $('.open-popup-priem').click(function() {
    $('.popup-wrapper, .popup-priem').show();
})

 $(function() {
	$(".popup").submit(function() {
        if($(".popupName").val().length <=2 || $(".popupNumber").val().length <=11 || !$('.popupCheckbox').is(':checked')){
            if($(".popupName").val().length <=2) {
                $('.popupName').addClass('invalid');
            }
            if($(".popupNumber").val().length <=11) {
                $('.popupNumber').addClass('invalid');
            } 
            if(!$('.popupCheckbox').is(':checked')) {
                $('.popupCheckboxp').addClass('invalidp');
            }
            if($(".popupName").val().length >2) {
                $('.popupName').removeClass('invalid');
            }
            if($(".popupNumber").val().length >11) {
                $('.popupNumber').removeClass('invalid');
            } 
            if($('.popupCheckbox').is(':checked')) {
                $('.popupCheckboxp').removeClass('invalidp');
            }
            $('.error').html('* Заполните пожалуйста все поля');
            return false;
        }
       else {
        $('.popupNumber').removeClass('invalid');
        $('.popupName').removeClass('invalid');
        $('.popupCheckboxp').removeClass('invalidp');
        $('.error').html('')
		var a = $(".popup").serialize();
		return $.ajax({
			url: "",
			type: "POST",
			data: a,
			success: function() {
                $('.popup-priem').hide();
                $('.popup-priem-thanks').show();
			}
		}), !1 
       }
	})
})

$(function() {
	$(".popup1").submit(function() {
        if($(".popupName1").val().length <=2 || $(".popupNumber1").val().length <=11 || !$('.popupCheckbox1').is(':checked')){
            if($(".popupName1").val().length <=2) {
                $('.popupName1').addClass('invalid');
            }
            if($(".popupNumber1").val().length <=11) {
                $('.popupNumber1').addClass('invalid');
            } 
            if(!$('.popupCheckbox1').is(':checked')) {
                $('.popupCheckboxp1').addClass('invalidp');
            }
            if($(".popupName1").val().length >2) {
                $('.popupName1').removeClass('invalid');
            }
            if($(".popupNumber1").val().length >11) {
                $('.popupNumber1').removeClass('invalid');
            } 
            if($('.popupCheckbox1').is(':checked')) {
                $('.popupCheckboxp1').removeClass('invalidp');
            }
            $('.error1').html('* Заполните пожалуйста все поля');
            return false;
        }
       else {
        $('.popupNumber1').removeClass('invalid');
        $('.popupName1').removeClass('invalid');
        $('.popupCheckboxp1').removeClass('invalidp');
        $('.error1').html('')
		var a = $(".popup1").serialize();
		return $.ajax({
			url: "",
			type: "POST",
			data: a,
			success: function() {
                $('.popup-zayavk').hide();
                $('.popup-zayavk-thanks').show();
			}
		}), !1 
       }
	})
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav: true,
    items:1
})

$(document).ready(function() {
    $('.gallery-item').magnificPopup({type:'image'});
  });

$(function() {
	$(".aboutForm").submit(function() {
        if($(".aboutName").val().length <=2 || $(".aboutNumber").val().length <=11 || !$('.aboutCheckbox').is(':checked')){
            if($(".aboutName").val().length <=2) {
                $('.aboutName').addClass('invalid');
            }
            if($(".aboutNumber").val().length <=11) {
                $('.aboutNumber').addClass('invalid');
            } 
            if(!$('.aboutCheckbox').is(':checked')) {
                $('.aboutCheckboxa').addClass('invalidp');
            }
            if($(".aboutName").val().length >2) {
                $('.aboutName').removeClass('invalid');
            }
            if($(".aboutNumber").val().length >11) {
                $('.aboutNumber').removeClass('invalid');
            } 
            if($('.aboutCheckbox').is(':checked')) {
                $('.aboutCheckboxa').removeClass('invalidp');
            }
            $('.errorA').html('* Заполните пожалуйста все поля');
            return false;
        }
       else {
        $('.aboutNumber').removeClass('invalid');
        $('.aboutName').removeClass('invalid');
        $('.aboutCheckboxa').removeClass('invalidp');
        $('.errorA').html('')
		var a = $(".aboutForm").serialize();
		return $.ajax({
			url: "",
			type: "POST",
			data: a,
			success: function() {
                $('.popup-priem-thanks .popup-wrapper').show();
			}
		}), !1 
       }
	})
})

$(function() {
	$(".indexForm").submit(function() {
        if($(".indexName").val().length <=2 || $(".indexNumber").val().length <=11 || !$('.indexCheckbox').is(':checked')){
            if($(".indexName").val().length <=2) {
                $('.indexName').addClass('invalid');
            }
            if($(".indexNumber").val().length <=11) {
                $('.indexNumber').addClass('invalid');
            } 
            if(!$('.indexCheckbox').is(':checked')) {
                $('.indexCheckboxa').addClass('invalidp');
            }
            if($(".indexName").val().length >2) {
                $('.indexName').removeClass('invalid');
            }
            if($(".indexNumber").val().length >11) {
                $('.indexNumber').removeClass('invalid');
            } 
            if($('.indexCheckbox').is(':checked')) {
                $('.indexCheckboxa').removeClass('invalidp');
            }
            $('.errorA').html('* Заполните пожалуйста все поля');
            return false;
        }
       else {
        $('.indexNumber').removeClass('invalid');
        $('.indexName').removeClass('invalid');
        $('.indexCheckboxa').removeClass('invalidp');
        $('.errorA').html('')
		var a = $(".indexForm").serialize();
		return $.ajax({
			url: "",
			type: "POST",
			data: a,
			success: function() {
                $('.popup-priem-thanks .popup-wrapper').show();
			}
		}), !1 
       }
	})
})