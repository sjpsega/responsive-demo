/**
 * @author jianping.shenjp
 * !!cmd:compress=true
 */

/*merge start*/
(function(){
    ImportJavscript = {
        url:function(url){
            document.write('<script type="text/javascript" src="'+url+'"></scr'+'ipt>');
        }
    };
})();
/*merge end*/

/*libs*/
ImportJavscript.url('http://style.c.aliimg.com/fdevlib/js/fdev-v4/core/fdev-min.js');
ImportJavscript.url('http://style.c.aliimg.com/fdevlib/js/fdev-v4/widget/ui/core-min.js');
ImportJavscript.url('http://style.c.aliimg.com/fdevlib/js/fdev-v4/widget/util/json2.js');
ImportJavscript.url('http://style.c.aliimg.com/fdevlib/js/fdev-v4/widget/web/sweet.js');

/*page*/
ImportJavscript.url('../js/index.js');



