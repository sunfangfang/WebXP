/**
 * Created by y on 2016/5/19.
 */
$(function(){
//左侧宽
    $(window).load(function(){
        CLW();
    });
    $(window).resize(function() {
        CLW();
    });
    function CLW() {
        var CxW=$(window).width();
        var dd,cc;
        if(kaiguan){
            dd=257;
            cc=463;
        }else{
            dd=5;
            cc=212;
        }
        var CxcW = parseInt(CxW) -dd;
        var CJcW = parseInt(CxW) -cc;
        $(".xp_cl").css("width", CxcW);
        $(".xpj_l").css("width", CJcW);
    }
    //点击右边箭头显示隐藏右边内容
    var kaiguan=true;
    $(".c_dir").click(function(){
        $(".c_rightcur").toggleClass("c_leftcur");
        if(kaiguan){
            var aa=$(".xp_cl").width();
            $(".xp_cl").animate({"width": aa+252},500);
            var bb=$(".xpj_l").width();
            $(".xpj_l").animate({"width": bb+252},500);
            kaiguan=false;
        }
        else{
            var aa=$(".xp_cl").width();
            $(".xp_cl").animate({"width": aa-252},500);
            var bb=$(".xpj_l").width();
            $(".xpj_l").animate({"width": bb-252},500);
            kaiguan=true;
        }
        $(".xp_cra").animate({
            width:'toggle'
        },500);
    });

//左侧高
    $(window).load(function(){
        PicH();
    });
    $(window).resize(function() {
        PicH();
    });
    function PicH() {
        var pxH=$(window).height();
        var zz;
        if(kaiguan1){
            zz=120;
        }else{
            zz=5;
        }
        var pxcH = parseInt(pxH) -zz;
        $(".xp_cl_pic").css("height", pxcH);
    }


//    点击下边箭头底部内容显示和隐藏
    var kaiguan1=true;
    $(".c_bottomtop").click(function(){
        $(".c_bottomcur").toggleClass("c_topcur");
        if(kaiguan1){
            var ss=$(".xp_cl_pic").height();
            $(".xp_cl_pic").animate({"height": ss+115},500);
            kaiguan1=false;
        }
        else{
            var ss=$(".xp_cl_pic").height();
            $(".xp_cl_pic").animate({"height": ss-115},500);
            kaiguan1=true;
        }
        $(".xpj_footer").animate({
            height:'toggle'
        });
    });

});