/**
 * Created by y on 2016/5/16.
 */
$(function(){
    //自适应宽高
    $(window).load(function(){
        setConMaxWidth();
        setConMaxHeight();
    });
    $(window).resize(function() {
        setConMaxWidth();
        setConMaxHeight();
    });
    function setConMaxWidth() {
        var dd,dd2;
        if(kaiguan==false||kaiguan1==false){
            dd=0;
            dd2=0;
        }else{
            dd=355;
            dd2=365;
        }
        var fg=$(".content").width();
        var w = parseInt(fg) - dd;
        var ww=parseInt(fg) - dd2;
        $(".con_left1").css({"width": w});
        var w1=$(".con_left1").width()-5;
        $(".left_pic1").css("width",w1);

        $(".con_left2").css({"width": ww});
        var ww1=$(".con_left2").width()-5;
        $(".left_pic2").css("width",ww1);
    }
    function setConMaxHeight() {
        var fg=$(window).height();
        var h = parseInt(fg) - 120;
        $(".content").css({"height": h});
        var h1=$(".content").height()-500;
        $(".right_con").css("height",h1);
        if($(window).width()<1127){
            var h2=$(".content").height()-90;
        }else{
            var h2=$(".content").height()-48;
        }
        $(".left_con").css("height",h2);
    }
//  鼠标点击添加背景色
    $(".sd_botn").click(function(){
       $(".sd_botn").removeClass("bg_color");
       $(this).addClass("bg_color");
    });

// 家居设定点击箭头显示隐藏右边内容
    var kaiguan=true;
    $(".c_dirline1").click(function(){
        $(".con_right1").animate({
            width:'toggle'
        });
        $(".c_rightcur1").toggleClass("c_leftcur");
        if(kaiguan){
            var aa=$(".con_left1").width();
            $(".con_left1").animate({"width": aa+355},500);
            $(".left_pic1").animate({"width": aa+350},500);
            kaiguan=false;
        }
        else{
            var aa=$(".con_left1").width();
            $(".con_left1").animate({"width": aa-355},500);
            $(".left_pic1").animate({"width": aa-360},500);
            kaiguan=true;
        }
    });

//    产品设定点击箭头显示隐藏右边的内容
    var kaiguan1=true;
    $(".c_dirline2").click(function(){
        $(".con_right2").animate({
            width:'toggle'
        });
        $(".c_rightcur2").toggleClass("c_leftcur");
        if(kaiguan1){
            var aa=$(".con_left2").width();
            $(".con_left2").animate({"width": aa+355},500);
            $(".left_pic2").animate({"width": aa+350},500);
            kaiguan1=false;
        }
        else{
            var aa=$(".con_left2").width();
            $(".con_left2").animate({"width": aa-355},500);
            $(".left_pic2").animate({"width": aa-360},500);
            kaiguan1=true;
        }
    });



//    tab切换
    $(".menu li").each(function(i){
        $(this).data("index",i);
    });
    $(".menu li").click(function(){
        $(".menu li").removeClass("menu_check");
        $(this).addClass("menu_check");
        var i=$(this).data("index");
        $(".section").hide();
        $($(".section")[i]).show();
    });


//    弹窗切换
    $(".tc_menu li").each(function(i){
        $(this).data("index",i);
    });
    $(".tc_menu li").click(function(){
        kaiguan=true;
        $(".tc_menu li").removeClass("tcmenu_first");
        $(this).addClass("tcmenu_first");
        var n=$(this).data("index");
        $(".tc_block").hide();
        $($(".tc_block")[n]).show();
    });

//    筛选框的显示与隐藏
    //常用备注设定
    var onoff1=true;
    $("#bz_add").click(function(){
        if(onoff1){
            $("#bz_sd").show();
        }
        onoff1=false;
    });
    $("#bz_replace").click(function(){
        if(onoff1){
            $("#bz_sd").show();
            $("#bz_sd .sx_arrow").addClass("yidong");
        }
    });
    $("#bz_quxiao").click(function(){
        $("#bz_sd").hide();
        $("#bz_sd .sx_arrow").removeClass("yidong");
        onoff1=true;
    })
    $("#bz_queding").click(function(){
        $("#bz_sd").hide();
        $("#bz_sd .sx_arrow").removeClass("yidong");
        onoff1=true;
    });
    
    //裁切比例设定
    var onoff2=true;
    $("#cq_add").click(function(){
        if(onoff2){
            $("#cq_sd").show();
        }
        onoff2=false;
    });
    $("#cq_replace").click(function(){
        if(onoff2){
            $("#cq_sd").show();
            $("#cq_sd .sx_arrow").addClass("yidong");
        }
    });
    $("#cq_quxiao").click(function(){
        $("#cq_sd").hide();
        $("#cq_sd .sx_arrow").removeClass("yidong");
        onoff2=true;
    })
    $("#cq_queding").click(function(){
        $("#cq_sd").hide();
        $("#cq_sd .sx_arrow").removeClass("yidong");
        onoff2=true;
    })



});


