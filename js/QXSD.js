/**
 * Created by y on 2016/7/5.
 */
$(function(){
    $(window).load(function(){
        setConMaxHeight();
    });
    $(window).resize(function() {
        setConMaxHeight();
    });
    function setConMaxHeight() {
        var fg=$(window).height()-60;
        var aa=$(window).height()-290;
        var bb=$(window).height()-660;
        $(".main").css({"height": fg});
        $(".right_block").css("height",aa);
        $(".qx_tbcon01").css("height",bb);
    }

    $(".qx_img_fir").click(function () {
        $(this).siblings(".sec_ul").toggle();
        $(this).toggleClass("qx_img2");

    });
    $(".qx_img_sec").click(function () {
        $(this).siblings(".third_ul").toggle();
        $(this).toggleClass("qx_img2");
    })

    $("input").click(function(){
        alert(1);
        $("input[value='']").val("aa");
    })


});