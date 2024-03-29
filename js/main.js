$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto:true,
    });
    $('.owl-carousel').owlCarousel({
        dots:true,
        loop:true,
        autoplay:true,
        slideBy:3

    });
    $(window).scroll(function () {
        var topPos=$(this).scrollTop();
        if (topPos>120){
            $('.scroll-top').css('opacity','1')
        }else{
            $('.scroll-top').css('opacity','0')
        }
    })
    $('.scroll-top').click(function () {
        $('html,body').animate({scrollTop:0},"slow")
    })
    $(window).scroll(function () {
        var scrollval=$(this).scrollTop();
        if(scrollval>100){
            $('.secondary-dark-blue-bg').css({
                'position':'fixed',
                'left':'0',
                'right':'0',
                'top':'0',
                'z-index':'1000'
            })
        }else {
            $('.secondary-dark-blue-bg').css({
                'position':'relative',
                'left':'0',
                'right':'0',
                'top':'0',
                'z-index':'1000'
            })
        }
    })
    $('.services-title ul li a').click(function () {
        var tab_id=$(this).attr('data-tab')
        console.log(tab_id);
        $('.tabbings').removeClass('active-tab')
        $('#'+tab_id).addClass('active-tab')
        $('.services-title ul li a').removeClass('active-link')
        $(this).addClass('active-link');

        $('html,body').animate({scrollTop:0},"slow")

    })
    $('#responsiveTabsDemo .tab-links li a').click(function (e) {
        var attr=$(this).attr('href');
        $(attr).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass();
        e.preventDefault();

    })
    // $('.close').click(function () {
    //     $('.popup').hide();
    // })
});

