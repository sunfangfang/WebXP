/**
 * Created by y on 2016/5/19.
 */
$(function(){

   <!--左侧宽 -->
    $(window).load(function(){
        CLW();
    });
    $(window).resize(function() {
        CLW();
    });
    function CLW() {
        var CxW=$(window).width();
        var dd;
        if(kaiguan){
            dd=330;
        }else{
            dd=5;
        }
        var CxcW = parseInt(CxW) -dd;
        $(".xp_cl").css("width", CxcW);
    }
    //点击箭头显示隐藏右边内容
    var kaiguan=true;
    $(".c_dir").click(function(){
        $(".c_rightcur").toggleClass("c_leftcur");
        if(kaiguan){
            var aa=$(".xp_cl").width();
            $(".xp_cl").animate({"width": aa+325},500);
            kaiguan=false;
        }
        else{
            var aa=$(".xp_cl").width();
            $(".xp_cl").animate({"width": aa-325},500);
            kaiguan=true;
        }
        $(".xp_cra2").animate({
            width:'toggle'
        },500);
    });



//    左右箭头hover效果
    $(".dirl_div").hover(function(){
        $(".cl_arw").css("opacity",1);
    },function(){
        $(".cl_arw").css("opacity",0);
    })

    $(".dirr_div").hover(function(){
        $(".cr_arw").css("opacity",1);
    },function(){
        $(".cr_arw").css("opacity",0);
    })

});