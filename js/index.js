(function($){
    var main = {
        init:function(){
            if($.util.ua.ie67){
                var res_imgs = $(".img-responsive");
                var tempImg;
                var tempGrid;
                res_imgs.each(function(idx,item){
                    tempImg = $(item);
                    tempImg.data("imgW",tempImg.width());
                    tempImg.data("imgH",tempImg.height());
                });
                resizeFunction();
                $(window).resize(resizeFunction);
            }

            function resizeFunction(){
                res_imgs.each(function(idx,item){
                    tempImg = $(item);
                    tempGrid = tempImg.closest("[class*=grid-]");
                    if(tempGrid){
                        tempImg.width(tempGrid.width()>tempImg.data("imgW") ? tempImg.data("imgW") : tempGrid.width());
                    }
                });
            }
        }
    }
    main.init();
})(jQuery)