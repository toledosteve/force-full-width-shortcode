jQuery(function(){
    var bodyWidth = jQuery(".jg-force-full-width").parent().width();
    var windowWidth =jQuery(window).width();
    jQuery(".jg-force-full-width").css({"width": jQuery("body").width() + "px"});
    jQuery(".jg-force-full-width").children().css({"width":"100%"});

    if(windowWidth>bodyWidth){
        var marginLeft = -(windowWidth - bodyWidth)/2;

        jQuery(".jg-force-full-width").css({"margin-left": marginLeft+"px"});
    }

    jQuery(window).resize( function(){
        jQuery(".jg-force-full-width").css({"width": jQuery("body").width() + "px"});
        if(windowWidth>bodyWidth){
            jQuery(".jg-force-full-width").css({"margin-left": (-(jQuery(window).width() - jQuery(".jg-force-full-width").parent().width())/2)+"px"});
        } else{
            jQuery(".jg-force-full-width").css({"margin-left": "0px"});
        }
    });

});