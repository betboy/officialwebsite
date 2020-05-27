$(function(){
    $("a[href*=#]:not([href=#])").click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active')
        $('.mark').fadeOut()
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
            var e = jQuery(this.hash);
            e = e.length ? e : jQuery("[name=" + this.hash.slice(1) + "]");
            if (e.length) {
                var pos = e.offset().top-100;
                $("html,body").animate({
                        scrollTop: pos

                    }
                    , 1e3);
                return !1;
            }
        }
    });

    $('.m-header .menu').click(function() {
        $('.mark').fadeIn()
    })
    $('.mark .close').click(function() {
        $('.mark').fadeOut()
    })
});
