/**
 * Created by y on 2016/5/15.
 */
$(function(){
    $(window).load(function(){
        setConMaxHeight();
    });
    $(window).resize(function() {
        setConMaxHeight();
    });
   function setConMaxHeight() {
       var dd=$(".c_bottom").height();
        var fg=$(window).height();
       if($(window).width()<1279){
           var h = parseInt(fg) -200;
       }else{
           var h = parseInt(fg) -140;
       }
        $(".hc_content").css({"height": h},500);
        var h2=$(".hc_content").height()-60;
        $(".hc_contain").css({"height": h2},500);
    }

    var kaiguan=true;
    var show_tb=function(){
        var hckh=$(".hckh");
        hckh.animate({
            height:'toggle'
        });
        $(".c_topcur").toggleClass("c_bottomcur");
        if(kaiguan){
            var aa=$(".hc_contain").height();
            $(".hc_contain").animate({"height": aa-277},500);
            kaiguan=false;
        }
        else{
            var aa=$(".hc_contain").height();
            $(".hc_contain").animate({"height": aa+277},500);
            kaiguan=true;
        }
        setConMaxHeight();
    };
    $(".c_bottomline").click(function(){
        show_tb();
    });

    $("#hc_btn").click(function(){
        if($(".hckh").is(":visible")){
            return;
        }
        show_tb();
    })
});