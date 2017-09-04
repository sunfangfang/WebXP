/**
 * Created by y on 2016/5/19.
 */
$(function(){
   var num=["ck11","ck01","ck02","ck03","ck04","ck05","ck06","ck07","ck09","ck10","ck12","ck08"];
    $(".nav_list li").each(function(i){
        $(this).data("index",i);
    })
    $(".nav_list li").click(function(){
        var i=$(this).data("index");
        var aa=num[i];
        $(".nav_list li a").removeClass("font_color");
        $(this).find("a").addClass("font_color");
        $(".nav_list li a strong").removeClass("ck11 ck01 ck02 ck03 ck04 ck05 ck06 ck07 ck09 ck10 ck12 ck08");
        $(this).find("a strong").addClass(aa);
    })
});