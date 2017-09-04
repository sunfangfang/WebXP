/**
 * Created by y on 2016/5/18.
 */
$(function(){

    //全屏自适应
    $(window).load(function(){
        qxpH();
    });
    $(window).resize(function() {
        qxpH();
    });
    function qxpH() {
        var qxH=$(window).height();
        var qxcH =parseInt(qxH);
        $(".xp_con2").css("height", qxcH);
    }
    $(window).load(function(){
        qPicH();
    });
    $(window).resize(function() {
        qPicH();
    });

    function qPicH() {
        var qpxH=$(window).height();
        var qpxcH = parseInt(qpxH)-35;
        $(".qxp_cl_pic,.qcl_pic").css("height", qpxcH);
    }

    //全屏hover
    $('.qp_bottom').mouseover(function(){
        //clearTimeout(g);
        //g=setTimeout(function(){
        //    var qpH=$(window).height()-85;
        //    $(".qxp_cl_pic,.qcl_pic").css("height", qpH);
            $(".qp_hide").show();
        //},100);
    }).mouseout(function(){
            //if(g!=null)clearTimeout(g);
            //g=null;
        $(".qp_hide").hide();
        }
    );

    //$('.qp_hide').mouseout(function(){
    //    clearTimeout(h);
    //    h=setTimeout(function(){
    //        var qpH1=$(window).height()-35;
    //        $(".qxp_cl_pic,.qcl_pic").css("height", qpH1);
    //        $(".qp_hide").hide();
    //    },100);
    //}).mouseover(function(){
    //        if(h!=null)clearTimeout(h);
    //        h=null;
    //    }
    //);
    //自动浏览切换
    var timerid;
    // $("#qp_btn").click(function(){
    //     $(".xp_con2").fadeIn();
    //     $(".qp_bf").removeClass("qp_play gray");
    //     $(".qp_bf").addClass("qp_stop checkin");
    //     $(".qp_bf").html("停止");
    //     timerid=setInterval(function(){bofang()},2000);
    //     onoff=true;
    //     $(".zc_btn4").removeClass("checkin");
    // });
    $(".close_btn").click(function(){
        $(".xp_con2").hide();
        clearInterval(timerid);
    });

    //播放函数
    var curr=0;
    var type=".xp_right1 .zhezhao";
    var add=".cp1a01 img";
    //var bofang=function(){
    //    if(onoff00){
    //        type=".xp_right2 .zhezhao";
    //        add=".cp1a02 img";
    //    }else{
    //        type=".xp_right1 .zhezhao";
    //        add=".cp1a01 img";
    //    }
    //    if(curr==$(add).length){
    //        curr=0;
    //    }
    //    var src=$($(add)[curr]).attr("src");
    //    $(".qcl_pic img").attr("src",src);
    //    $(".cl_pic img").attr("src",src);
    //    $(".zhezhao").removeClass("zhezhao_show");
    //    $($(type)[curr]).addClass("zhezhao_show");
    //    $(".cp1").removeClass("check_border");
    //    $($(type)[curr]).parent().addClass("check_border");
    //    curr++;
    //};

    //快进，后退
    //var back=function(){
    //    if(curr==0){
    //        curr=$(add).length;
    //    }
    //    if(onoff00){
    //        type=".xp_right2 .zhezhao";
    //        add=".cp1a02 img";
    //    }else{
    //        type=".xp_right1 .zhezhao";
    //        add=".cp1a01 img";
    //    }
    //    var src=$($(add)[curr]).attr("src");
    //    $(".qcl_pic img").attr("src",src);
    //    $(".cl_pic img").attr("src",src);
    //    $(".zhezhao").removeClass("zhezhao_show");
    //    $($(type)[curr]).addClass("zhezhao_show");
    //    $(".cp1").removeClass("check_border");
    //    $($(type)[curr]).parent().addClass("check_border");
    //    curr--;
    //};


    //左右箭头翻页
    $(".qp_left").click(function(){
        back();
    });

    $(".qp_right").click(function(){
        bofang();
    });


    //第一张
    $(".first_pic").click(function(){
        clearInterval(timerid);
        curr=0;
        bofang();
        $(".zc_btn4").removeClass("checkin");
        $(this).addClass("checkin");
        $(".qp_bf").removeClass("qp_stop checkin");
        $(".qp_bf").addClass("qp_play gray");
        $(".qp_bf").html("继续");
        onoff=false;
    });
    //最后一张
    var last=function(add,id,id2){
        curr=$(add).length-1;
        var src=$($(add)[curr]).attr("src");
        $(id).attr("src",src);
        $(id2).attr("src",src);
        $(".qp_bf").removeClass("qp_stop checkin");
        $(".qp_bf").addClass("qp_play gray");
        $(".qp_bf").html("继续");
        onoff=false;
    };
    $(".last_pic").click(function(){
        clearInterval(timerid);
        last(".cp1a01 img",".qcl_pic img",".cl_pic img");
        $(".zc_btn4").removeClass("checkin");
        $(this).addClass("checkin");
    });

    //播放暂停切换
    var onoff=true;
    var type1=".cp1a01 img";
    $(".qp_bf").click(function(){
        if(onoff00){
            type1=".cp1a02 img";
        }else{
            type1=".cp1a01 img";
        }
        if(onoff){
            clearInterval(timerid);
            $(this).removeClass("qp_stop checkin");
            $(this).addClass("qp_play gray");
            $(this).html("继续");
            onoff=false;
        }else{
            $(this).removeClass("qp_play gray");
            $(this).addClass("qp_stop checkin");
            $(this).html("停止");
            timerid=setInterval(function(){bofang()},2000);
            onoff=true;
            $(".zc_btn4").removeClass("checkin");
        }
    });


    //点击缩略图显示大图
    var onoff00=true;
    $(".xp_right1 .cp1").each(function(i){
        $(this).data('index',i)
    });
    $(".xp_right1 .cp1").click(function(e){
        e.stopPropagation();
        $(".xp_right1 .zhezhao").removeClass("zhezhao_show");
        $(this).find(".zhezhao").addClass("zhezhao_show");
        if(isCtrl){
            $(this).toggleClass("check_border");
        }else{
            $(".xp_right1 .cp1").removeClass("check_border");
            $(this).addClass("check_border");
        }
        var i = $(this).data('index');
        curr=i;
        var link=$(this).find("img").attr("src");
        $(".cl_pic img").attr("src",link);
        $(".qcl_pic img").attr("src",link);
        onoff00=false;
    });

//   右二点击缩略图显示大图
    $(".xp_right2 .cp1").each(function(i){
        $(this).data('index',i)
    });
    $(".xp_right2 .cp1").click(function(e){
        e.stopPropagation();
        $(".xp_right2 .zhezhao").removeClass("zhezhao_show");
        $(this).find(".zhezhao").addClass("zhezhao_show");
        if(isCtrl){
            $(this).toggleClass("check_border");
        }else{
            $(".xp_right2 .cp1").removeClass("check_border");
            $(this).addClass("check_border");
        }
        var i = $(this).data('index');
        curr=i;
        var link=$(this).find("img").attr("src");
        $(".cl_pic img").attr("src",link);
        $(".qcl_pic img").attr("src",link);
        onoff00=true;
    });



    //设置界面中内容区域的高
    $(window).load(function(){
        xpH();
    });
    $(window).resize(function() {
        xpH();
    });
    var xcH1,xcH2,xcH3;
    function xpH() {
        var xH=$(window).height();
        xcH1 = parseInt(xH);
        xcH2 = parseInt(xH) -100;
        var xcH3 = parseInt(xH) -106;
        var xcH4=parseInt(xH) -107;
        $(".xp_con").css("height", xcH1);
        $(".xp_cl_pic").css({"height":xcH2});
        $(".cra_con").css({"height":xcH3});
        $(".crb_con").css({"height":xcH4});
    }


    //隐藏显示导航
    var t, f, g,h;
    $('.top_hide').mouseover(function(){
        clearTimeout(t);
        t=setTimeout(function(){
            $(".xp_top").slideDown();
        },100);
    }).mouseout(function(){
            if(t!=null)clearTimeout(t);
            t=null;
        }
    );

    $('.xp_top').mouseout(function(){
        clearTimeout(f);
        f=setTimeout(function(){
            $(".xp_top").slideUp();
        },100);
    }).mouseover(function(){
            if(f!=null)clearTimeout(f);
            f=null;
        }
    );
    $('.footer_div').mouseover(function(){
        clearTimeout(g);
        g=setTimeout(function(){
            $(".footer_hover").show();
        },100);
    }).mouseout(function(){
            if(g!=null)clearTimeout(g);
            g=null;
        }
    );

    $('.footer_hover').mouseout(function(){
        clearTimeout(h);
        h=setTimeout(function(){
            $(".xp_cl_pic").css({"height":xcH2});
            $(".footer_hover").hide();
        },100);
    }).mouseover(function(){
            if(h!=null)clearTimeout(h);
            h=null;
        }
    );

    //导航菜单选中状态
    $(".top_btn1").click(function(){
        if($(this).hasClass("yuanpian")||$(this).hasClass("sheji")||$(this).hasClass("chanpin")){
            return;
        }
        $(".top_btn1").each(function(){
            if($(this).hasClass("yuanpian")||$(this).hasClass("sheji")||$(this).hasClass("chanpin")){
                return;
            }
            $(this).removeClass("top_check");
        });
        $(this).addClass("top_check");
    });



    //    左右箭头hover效果
    $(".dirl_div").hover(function(){
        $(".cl_arw").css("opacity",1);
    },function(){
        $(".cl_arw").css("opacity",0);
    });

    $(".dirr_div").hover(function(){
        $(".cr_arw").css("opacity",1);
    },function(){
        $(".cr_arw").css("opacity",0);
    });


    //全屏左右箭头hover效果
    $(".dirl_div1").hover(function(){
        $(".cl_arw2").css("opacity",1);
    },function(){
        $(".cl_arw2").css("opacity",0);
    });

    $(".dirr_div1").hover(function(){
        $(".cr_arw2").css("opacity",1);
    },function(){
        $(".cr_arw2").css("opacity",0);
    });

    /*li悬浮*/
    $(function () {
        $(".li_xf").mouseover(function () {
            $(".div_con").css({"display": "block"});
        }).mouseout(function () {
            $(".div_con").css({"display": "none"});
        });
    });
    $(function () {
        $(".ul_lis>li").click(function () {
            $(this).find(".posi_mh").addClass("span_qued").parent().siblings().find(".posi_mh").removeClass("span_qued");
        });
    });

    /*图片右击事件*/
    $(function () {
        $(document).mousedown(function (e) {
            if (3 == e.which) { //鼠标右键3 中键2 鼠标左键1
                $(".tc_ul").slideDown();
                $(document).click(function () {
                    $(".tc_ul").hide();
                });
            }
        });
    });
    /*阻止浏览器右击出现弹窗*/
    document.oncontextmenu = function (ev) {
        var ev = ev || event;
        return false;
    };

    /*隔行换色*/
    $(".ta_bga tr:even").addClass("tr_styles");
    //--------------------------------------------------------------------------


    //主页面左侧宽自适应
    $(function(){
        var CxW=$(window).width();
        $(".xp_cl").css("width", CxW);
        $(".px").css("left",CxW-25+'px');
    });
    $(window).resize(function() {
        CLW();
    });
    function CLW() {
        var CxW=$(window).width();
        if(kaiguan1==false) {
            num[1]=0;
        }else{
            num[1]=$(".xp_right1").width();
        }
        if(kaiguan2==false){
            num[2]=0;
        }else{
            num[2]=$(".xp_right2").width();
        }
        if(kaiguan3==false){
            num[3]=0;
        }else{
            num[3]=$(".xp_crb").width();
        }
        var n1=CxW-num[1]-num[2]-num[3]-2;
        $(".xp_cl").css("width",n1);
        $(".px").css("left",n1-25+'px');
        $(".dir1").css("left",n1);
        $(".dir2").css("left",n1+num[1]);
        $(".dir3").css("left",n1+num[1]+num[2]);
    }

    //    点击箭头显示隐藏右边内容
    var show=function(dir,data,name,idd){
        $(name).finish();
        $(".xp_cl").finish();
        $(dir).toggleClass("c_rightcur");
        $(idd).addClass("top_check");
        var aa=$(".xp_cl").width();
        $(".xp_cl").css({"width": aa-data});
        $(name).show();
        $(".px").css("left",aa-data-25+'px');
        num[0]=aa-data;
        if(name==".xp_crb"){return;}else{
            $(".px").show();
        }
    };
    var hide=function(dir,data,name,idd){
        $(name).finish();
        $(".xp_cl").finish();
        $(name).hide();
        $(dir).toggleClass("c_rightcur");
        var aa=$(".xp_cl").width();
        $(".xp_cl").css({"width": aa+data});
        $(".px").css("left",aa+data-25+'px');
        $(idd).removeClass("top_check");
        num[0]=aa+data;
    };



    var kaiguan1=false,kaiguan2=false,kaiguan3=false;
    //    左右拖拽
    var num=[];
    var x1=$(".xp_cl").width();
    var x2=$(".xp_right1").width();
    var x3=$(".xp_right2").width();
    var x4=$(".xp_crb").width();
    num=[x1,x2,x3,x4];
    var drag=function(){
        var clickX, leftOffset, inx, nextW2, nextW;
        var dragging  = false;
        var doc 	  = document;
        var labBtn 	  = $(".xp_con").find('.dir:visible');
        var wrapWidth;
        labBtn.bind('mousedown',function(){
            wrapWidth = $(".xp_con").width();
                dragging   = true;
                leftOffset = 0;
                inx 	   = $(this).index('.dir');
        });

        doc.onmousemove = function(e){
            if (dragging) {
                clickX = e.pageX;
                //判断第几个拖动按钮
                if( inx == 0 ){
                    //第一个拖动按钮左边不出界
                    if($(".dir2").is(":visible")&&$(".dir3").is(":visible")){
                        if(clickX > leftOffset) {
                            $(".dir1").css('left', clickX + 'px');//按钮移动
                            $(".dir1").prev().width( clickX + 'px');
                            nextW2 = clickX-leftOffset;
                            $(".dir1").next().width( wrapWidth - nextW2-$(".dir2").next().width()-$(".dir3").next().width()-1 + 'px');
                        }else if(clickX <= leftOffset+10){
                            $(".dir1").css('left', '10px');
                            $(".dir1").prev().width('10px');
                            $(".dir1").next().width( wrapWidth-$(".dir1").prev().width() - $(".dir2").next().width() - $(".dir3").next().width()-12+"px");
                        }
                        if( clickX >($(".dir2").offset().left-5)) {
                            //第一个按钮右边不出界
                            $(".dir1").css('left', parseFloat($(".dir2").offset().left -10)+'px');//减去按钮的宽度
                            //第一个按钮左右容器，右边不出界
                            $(".dir1").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth - $(".dir1").next().width()-$(".dir2").next().width() -$(".dir3").next().width()-1+'px');
                        }
                    }else if($(".dir2").is(":visible")&&$(".dir3").is(":hidden")){
                        if(clickX > leftOffset+$(".dir3").next().width()+5) {
                            $(".dir1").css('left', clickX + 'px');//按钮移动
                            $(".dir1").prev().width( clickX + 'px');
                            nextW2 = clickX-leftOffset;
                            $(".dir1").next().width( wrapWidth - nextW2-$(".dir2").next().width()-1+ 'px');
                        }else if(clickX <= leftOffset+$(".dir3").next().width()+5){
                            $(".dir1").css('left', $(".dir3").next().width());
                            $(".dir1").prev().width($(".dir3").next().width()+'px');
                            $(".dir1").next().width( wrapWidth - $(".dir1").prev().width() - $(".dir2").next().width()-1+"px");
                        }
                        if( clickX >($(".dir2").offset().left-5)) {
                            //第一个按钮右边不出界
                            $(".dir1").css('left', parseFloat($(".dir2").offset().left -10)+'px');//减去按钮的宽度
                            //第一个按钮左右容器，右边不出界
                            $(".dir1").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth-$(".dir1").next().width() -$(".dir2").next().width()-1+'px');

                        }
                    } else if($(".dir2").is(":hidden")&&$(".dir3").is(":visible")){
                        if(clickX >leftOffset+$(".dir2").next().width()+5) {
                            $(".dir1").css('left', clickX + 'px');//按钮移动
                            $(".dir1").prev().width( clickX + 'px');
                            nextW2 = clickX-leftOffset;
                            $(".dir1").next().width( wrapWidth - nextW2-$(".dir3").next().width()-1 + 'px');
                        }else if(clickX <= leftOffset+$(".dir2").next().width()+5){
                            $(".dir1").css('left', $(".dir2").next().width());
                            $(".dir1").prev().width($(".dir2").next().width()+'px');
                            $(".dir1").next().width( wrapWidth - $(".dir1").prev().width()- $(".dir3").next().width()-1+"px");
                        }
                        if( clickX >($(".dir3").offset().left-5)) {
                            //第一个按钮右边不出界`
                            $(".dir1").css('left', parseFloat($(".dir3").offset().left -10)+'px');//减去按钮的宽度
                            //第一个按钮左右容器，右边不出界
                            $(".dir1").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth-$(".dir1").next().width()-$(".dir3").next().width()-1+'px');

                        }
                    }else{
                        if(clickX > $(".dir2").next().width()+$(".dir3").next().width()+5) {
                            $(".dir1").css('left', clickX + 'px');//按钮移动
                            $(".dir1").prev().width( clickX + 'px');
                            nextW2 = clickX-leftOffset;
                            $(".dir1").next().width( wrapWidth - nextW2 + 'px');
                        } else if((clickX <= $(".dir2").next().width()+$(".dir3").next().width()+5)){
                            $(".dir1").css('left', $(".dir2").next().width()+$(".dir3").next().width()+'px');
                            $(".dir1").prev().width($(".dir2").next().width()+$(".dir3").next().width()+'px');
                            $(".dir1").next().width( wrapWidth - $(".dir1").prev().width() + 'px');
                        }

                        if( clickX >= wrapWidth-10 ) {
                            //第一个按钮右边不出界
                            $(".dir1").css('left', wrapWidth -5 + 'px'); //减去按钮的宽度
                            //第一个按钮左右容器，右边不出界
                            $(".dir1").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth-10+'px');
                        }
                    }
                    ThumbH();

                }
                else if(inx==1) {
                    //第二个拖动按钮左边不出界
                    if($(".dir1").is(":visible")&&$(".dir3").is(":visible")){
                        if( (clickX) > $(".dir1").next().width() + 5 ) {
                            $(".dir2").css('left', clickX + 'px'); //按钮移动
                            $(".dir1").prev().width( (clickX-$(".dir1").next().width())-1 + 'px');
                            $(".dir1").css("left",$(".dir1").prev().width());
                            nextW = clickX;
                            $(".dir2").next().width( wrapWidth - nextW- $(".dir3").next().width()-1 + 'px');
                        }else if( (clickX) < $(".dir1").next().width() + 5 ){
                            //第二个按钮向左移动不出界
                            $(".dir2").css('left', parseFloat($(".dir1").next().width())+10+ 'px');
                            //第二个按钮左右容器，不出界
                            $(".dir1").prev().width('10px');
                            $(".dir1").css("left",'10px');
                            $(".dir2").next().width( wrapWidth -$(".dir1").prev().width()- $(".dir1").next().width()-$(".dir3").next().width()-1+"px");
                        }
                        if( clickX >($(".dir3").offset().left-5)) {
                            //第二个按钮右边不出界
                            $(".dir2").css('left', parseFloat($(".dir3").offset().left -10)+'px');//减去按钮的宽度
                            //第二个按钮左右容器，右边不出界
                            $(".dir2").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth- $(".dir2").next().width()- $(".dir1").next().width()-$(".dir3").next().width()-1);
                            $(".dir1").css("left",$(".dir1").prev().width());
                        }
                    }else if($(".dir1").is(":visible")&&$(".dir3").is(":hidden")){
                        if( (clickX) > $(".dir1").next().width()+$(".dir3").next().width() + 5 ) {
                            $(".dir2").css('left', clickX + 'px'); //按钮移动
                            $(".dir1").prev().width( (clickX-$(".dir1").next().width())-1 + 'px');
                            $(".dir1").css("left",$(".dir1").prev().width());
                            nextW = clickX;
                            $(".dir2").next().width( wrapWidth - clickX-1 + 'px');
                        }else if( (clickX) < $(".dir1").next().width() +$(".dir3").next().width()+ 5 ){
                            $(".dir2").css('left', parseFloat($(".dir1").next().width()+$(".dir3").next().width())+ 'px');
                            //第二个按钮左右容器，不出界
                            $(".dir1").prev().width($(".dir3").next().width()+'px');
                            $(".dir1").css("left",$(".dir3").next().width()+'px');
                            $(".dir2").next().width( wrapWidth- $(".dir1").prev().width() - $(".dir1").next().width()-1+"px");
                        }
                        if( clickX >= wrapWidth-15 ) {
                            //第二个按钮右边不出界
                            $(".dir2").css('left', wrapWidth -10 + 'px'); //减去按钮的宽度
                            $(".dir1").css('left',wrapWidth-$(".dir1").next().width()-10+'px');
                            //第二个按钮左右容器，右边不出界
                            $(".dir2").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth-$(".dir1").next().width()-11+'px');
                        }
                    } else if($(".dir1").is(":hidden")&&$(".dir3").is(":visible")){
                        if(clickX > $(".dir1").next().width()+5) {
                            $(".dir2").css('left', clickX + 'px');//按钮移动
                            $(".dir1").prev().width( clickX + 'px');
                            nextW2 = clickX-leftOffset;
                            $(".dir2").next().width( wrapWidth - nextW2-$(".dir3").next().width()-1 + 'px');
                        }else if(clickX <= $(".dir1").next().width()+5){
                            $(".dir2").css('left',$(".dir1").next().width()+'px');
                            $(".dir1").prev().width($(".dir1").next().width()+'px');
                            $(".dir2").next().width( wrapWidth-$(".dir1").prev().width() - $(".dir3").next().width()-1+"px");
                        }
                        if( clickX >($(".dir3").offset().left-5)) {
                            //第二个按钮右边不出界
                            $(".dir2").css('left', parseFloat($(".dir3").offset().left -10)+'px');//减去按钮的宽度
                            //第二个按钮左右容器，右边不出界
                            $(".dir2").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth -$(".dir2").next().width()-$(".dir3").next().width()-1);
                        }
                    }else{
                        if(clickX > $(".dir1").next().width()+$(".dir3").next().width()+5) {
                            $(".dir2").css('left', clickX + 'px');//按钮移动
                            $(".dir1").prev().width( clickX + 'px');
                            nextW2 = clickX-leftOffset;
                            $(".dir2").next().width( wrapWidth - nextW2 + 'px');
                        } else {
                            $(".dir2").css('left',$(".dir1").next().width()+$(".dir3").next().width()+'px');
                            $(".dir1").prev().width($(".dir1").next().width()+$(".dir3").next().width()+'px');
                            $(".dir2").next().width(wrapWidth-$(".dir1").prev().width()+'px');
                        }

                        if( clickX >= wrapWidth-10 ) {
                            //第二个按钮右边不出界
                            $(".dir2").css('left', wrapWidth -10 + 'px'); //减去按钮的宽度
                            //第二个按钮左右容器，右边不出界
                            $(".dir2").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth-10+'px');

                        }
                    }
                    ThumbH();
                }
                else if(inx==2){
                    //第三个拖动按钮左边不出界
                    if($(".dir1").is(":visible")&&$(".dir2").is(":visible")){
                        if( (clickX) >$(".dir1").next().width()+$(".dir2").next().width() + 5  ) {
                            $(".dir3").css('left', clickX + 'px'); //按钮移动
                            $(".dir1").prev().width( (clickX-$(".dir1").next().width()-$(".dir2").next().width())-1 + 'px');
                            $(".dir1").css("left",$(".dir1").prev().width());
                            $(".dir2").css("left",$(".dir1").offset().left+$(".dir1").next().width()+'px');
                            nextW = clickX;
                            $(".dir3").next().width( wrapWidth - clickX-1 + 'px');
                        }else if( (clickX) <= $(".dir1").next().width()+$(".dir2").next().width() + 5 ){
                            $(".dir3").css('left', parseFloat($(".dir1").next().width()+$(".dir2").next().width())+ 'px');
                            //第三个按钮左右容器，不出界
                            $(".dir1").prev().width('10px');
                            $(".dir1").css("left",'10px');
                            $(".dir2").css("left",$(".dir1").next().width()+'px');
                            $(".dir3").next().width( wrapWidth-$(".dir1").prev().width() - $(".dir1").next().width()-$(".dir2").next().width()-1+"px");
                        }
                        if( clickX >= wrapWidth-10 ) {
                            //第三个按钮右边不出界
                            $(".dir3").css('left', wrapWidth -10 + 'px'); //减去按钮的宽度
                            $(".dir1").css('left', wrapWidth-$(".dir1").next().width()-$(".dir2").next().width()-10+ 'px');
                            $(".dir2").css('left', wrapWidth-$(".dir2").next().width()-10 + 'px');
                            //第三个按钮左右容器，右边不出界
                            $(".dir3").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth - $(".dir1").next().width()-$(".dir2").next().width()-$(".dir3").next().width()-1+'px');
                        }

                    }else if($(".dir1").is(":visible")&&$(".dir2").is(":hidden")){
                        if( (clickX) > $(".dir1").next().width()+$(".dir2").next().width() + 5 ) {
                            $(".dir3").css('left', clickX + 'px'); //按钮移动
                            $(".dir1").prev().width( (clickX-$(".dir1").next().width())-1 + 'px');
                            $(".dir1").css("left",$(".dir1").prev().width());
                            nextW = clickX;
                            $(".dir3").next().width( wrapWidth - clickX-1 + 'px');
                        }else if( (clickX) <= $(".dir1").next().width()+$(".dir2").next().width()+ 5 ){
                            $(".dir3").css('left', parseFloat($(".dir1").next().width()+$(".dir2").next().width())+ 'px');
                            //第三个按钮左右容器，不出界
                            $(".dir1").prev().width($(".dir2").next().width()+'px');
                            $(".dir1").css("left",$(".dir2").next().width()+'px');
                            $(".dir3").next().width( wrapWidth-$(".dir1").prev().width() - $(".dir1").next().width()-1+"px");
                        }
                        if( clickX >= wrapWidth-10 ) {
                            //第三个按钮右边不出界
                            $(".dir3").css('left', wrapWidth -10 + 'px'); //减去按钮的宽度
                            //第三个按钮左右容器，右边不出界
                            $(".dir3").next().width( '10px' );
                            $(".dir1").css('left', wrapWidth-$(".dir1").next().width()-10 + 'px');
                            $(".dir1").prev().width( wrapWidth-$(".dir1").next().width()-11+'px');

                        }
                    } else if($(".dir1").is(":hidden")&&$(".dir2").is(":visible")){
                        if( (clickX) > $(".dir1").next().width()+$(".dir2").next().width() + 5 ) {
                            $(".dir3").css('left', clickX + 'px'); //按钮移动
                            $(".dir1").prev().width( (clickX-$(".dir2").next().width())-1 + 'px');
                            $(".dir2").css("left",$(".dir1").prev().width());
                            nextW = clickX;
                            $(".dir3").next().width( wrapWidth - clickX-1 + 'px');
                        }else if( (clickX) <= $(".dir1").next().width()+$(".dir2").next().width()+ 5 ){
                            $(".dir3").css('left', parseFloat($(".dir1").next().width()+$(".dir2").next().width())+ 'px');
                            //第三个按钮左右容器，不出界
                            $(".dir1").prev().width($(".dir1").next().width()+'px');
                            $(".dir2").css("left",$(".dir1").next().width()+'px');
                            $(".dir3").next().width( wrapWidth-$(".dir1").prev().width() - $(".dir2").next().width()-1+"px");
                        }
                        if( clickX >= wrapWidth-10 ) {
                            //第三个按钮右边不出界
                            $(".dir3").css('left', wrapWidth -10 + 'px'); //减去按钮的宽度
                            $(".dir2").css('left', wrapWidth-$(".dir2").next().width()-10 + 'px');
                            //第三个按钮左右容器，右边不出界
                            $(".dir3").next().width( '10px' );
                            $(".dir1").prev().width( wrapWidth-$(".dir2").next().width()-11+'px');

                        }
                    }else{
                        if(clickX > $(".dir1").next().width()+$(".dir2").next().width()) {
                            $(".dir3").css('left', clickX + 'px');//按钮移动
                            $(".dir1").prev().width( clickX + 'px');
                            nextW2 = clickX-leftOffset;
                            $(".dir3").next().width( wrapWidth - nextW2 + 'px');
                        } else {
                            $(".dir3").css('left', $(".dir1").next().width()+$(".dir2").next().width()+'px');
                            $(".dir1").prev().width($(".dir1").next().width()+$(".dir2").next().width()+'px');
                            $(".dir3").next().width(wrapWidth-$(".dir1").prev().width()+'px');
                        }

                        if( clickX >= wrapWidth-10 ) {
                            //第三个按钮右边不出界
                            $(".dir3").css('left', wrapWidth -10 + 'px'); //减去按钮的宽度
                            //第三个按钮左右容器，右边不出界
                            $(".dir1").prev().width( wrapWidth-10+'px');
                            $(".dir3").next().width('10px');
                        }
                    }
                }
                var leftWidth=$(".xp_cl").width();
                $(".px").css("left",leftWidth-25+'px');
            }
            //e.preventDefault();
        };

        $(doc).mouseup(function(e) {
            dragging = false;
            e.cancelBubble = true;
            var x1=$(".xp_cl").width();
            var x2=$(".xp_right1").width();
            var x3=$(".xp_right2").width();
            var x4=$(".xp_crb").width();
            num=[x1,x2,x3,x4];
        });
    };
    //点击导航显示右边内容
    $(".yuanpian").click(function(){
        num[2]=$(".xp_right2").width();
        var aaa1=num[2];
        if(kaiguan2){
            hide(".c_rightcur2",num[2],".xp_right2",".yuanpian");
            kaiguan2=false;
            num[2]=0;
        }
        else{
            show(".c_rightcur2",num[2],".xp_right2",".yuanpian");
            kaiguan2=true;
            num[2]=aaa1;
        }
        dir_show();
        drag();
        ThumbH();
        if(kaiguan1||kaiguan2){return;}else{
            $(".px").hide();
        }
    });
    $(".sheji").click(function(){
        num[1]=$(".xp_right1").width();
        var aaa2=num[1];
        if(kaiguan1){
            hide(".c_rightcur1",num[1],".xp_right1",".sheji");
            kaiguan1=false;
            num[1]=0;
        }
        else{
            show(".c_rightcur1",num[1],".xp_right1",".sheji");
            kaiguan1=true;
            num[1]=aaa2;
        }
        dir_show();
        drag();
        ThumbH();
        if(kaiguan1||kaiguan2){return;}else{
            $(".px").hide();
        }
    });
    $(".chanpin").click(function(){
        num[3]=$(".xp_crb").width();
        var aaa3=num[3];
        if(kaiguan3){
            hide(".c_rightcur3",num[3],".xp_crb",".chanpin");
            kaiguan3=false;
            num[3]=0;
        }
        else{
            show(".c_rightcur3",num[3],".xp_crb",".chanpin");
            kaiguan3=true;
            num[3]=aaa3;
        }
        dir_show();
        drag();
        if(kaiguan1||kaiguan2){return;}else{
            $(".px").hide();
        }
    });
//   拖拽条显示
    var dir1_pos,dir2_pos,dir3_pos;
    var dir_show=function(){
        var ww=$(window).width();
        if(kaiguan1==true&&kaiguan2==true&&kaiguan3==true){
            dir3_pos=num[0]+num[1]+num[2];
            dir2_pos=num[0]+num[1];
            dir1_pos=num[0];
            $(".dir1,.dir2,.dir3").show();
            $(".dir1").css("left",dir1_pos);
            $(".dir2").css("left",dir2_pos);
            $(".dir3").css("left",dir3_pos);
        }else if(kaiguan1==true&&kaiguan2==false&&kaiguan3==false){
            dir1_pos=num[0];
            $(".dir1").show();
            $(".dir2,.dir3").hide();
            $(".dir1").css("left",dir1_pos);
        }else if(kaiguan1==true&&kaiguan2==false&&kaiguan3==true){
            dir3_pos=num[0]+num[1];
            dir1_pos=num[0];
            $(".dir1,.dir3").show();
            $(".dir2").hide();
            $(".dir1").css("left",dir1_pos);
            $(".dir3").css("left",dir3_pos);
        }else if(kaiguan1==true&&kaiguan2==true&&kaiguan3==false){
            dir2_pos=num[0]+num[1];
            dir1_pos=num[0];
            $(".dir1,.dir2").show();
            $(".dir3").hide();
            $(".dir1").css("left",dir1_pos);
            $(".dir2").css("left",dir2_pos);
        }else if(kaiguan1==false&&kaiguan2==false&&kaiguan3==false){
            $(".dir1,.dir2,.dir3").hide();
        }else if(kaiguan1==false&&kaiguan2==true&&kaiguan3==true){
            dir3_pos=num[0]+num[2];
            dir2_pos=num[0];
            $(".dir2,.dir3").show();
            $(".dir1").hide();
            $(".dir2").css("left",dir2_pos);
            $(".dir3").css("left",dir3_pos);
        }else if(kaiguan1==false&&kaiguan2==true&&kaiguan3==false){
            dir2_pos=num[0];
            $(".dir2").show();
            $(".dir1,.dir3").hide();
            $(".dir2").css("left",dir2_pos);
        }else if(kaiguan1==false&&kaiguan2==false&&kaiguan3==true){
            dir3_pos=num[0];
            $(".dir3").show();
            $(".dir1,.dir2").hide();
            $(".dir3").css("left",dir3_pos);
        }
    };




//    拖动框选
//    var pconfig={
//        startx:0,
//        starty:0,
//        beginx:0,
//        beginy:0,
//        endx:0,
//        endy:0,
//        divId:"",
//        EndX:0,
//        EndY:0
//    };
//    function jswh(){
//        if(pconfig.divId!=""){
//            var w=Math.abs(parseInt(pconfig.endx,10)-parseInt(pconfig.beginx,10));
//            var h=Math.abs(parseInt(pconfig.endy,10)-parseInt(pconfig.beginy,10));
//            $("#"+pconfig.divId).css({"width":w+"px","height":h+"px","top":pconfig.starty,"left":pconfig.startx});
//        }
//    }
//
//    $(".xp_cra").on("mousedown",function(event){
//        $("#newlinediv").remove();
//        pconfig.startx=event.pageX;
//        pconfig.starty=event.pageY;
//        pconfig.beginx=event.pageX;
//        pconfig.beginy=event.pageY;
//        pconfig.divId="newlinediv";
//        var n=$("#"+pconfig.divId).length;
//        if(n<=0){
//            $("<div class='line00' id='newlinediv'></div>").appendTo(document.body);
//        }else{
//            $("#"+pconfig.divId).hide();
//        }
//        $(document).bind("mousemove",function(event){
//            $("#"+pconfig.divId).show();
//            pconfig.endx=event.pageX;
//            pconfig.endy=event.pageY;
//            pconfig.EndX=event.pageX;
//            pconfig.EndY=event.pageY;
//            if(pconfig.endx<pconfig.beginx){
//                pconfig.startx=pconfig.endx;
//                pconfig.EndX=pconfig.beginx;
//            }
//            if(pconfig.endy<pconfig.beginy){
//                pconfig.starty=pconfig.endy;
//                pconfig.EndY=pconfig.beginy;
//            }
//            jswh();
//            $(".cp1").removeClass("check_border");
//            for(var i=0;i<$(".cp1").length;i++){
//                var imgW=$($(".cp1")[i]).offset().left;
//                var imgH=$($(".cp1")[i]).offset().top;
//                if(imgW>pconfig.startx-50&&imgW<pconfig.EndX-50&&imgH>pconfig.starty-50&&imgH<pconfig.EndY-50){
//                    $($(".cp1")[i]).addClass("check_border");
//                }
//            }
//        });
//        $(document).bind("mouseup",function(){
//            $(document).unbind("mousemove");
//            $("#newlinediv").remove();
//        });
//    });
//
//    $(document).click(function(e){
//        if(e.target!==$(".cp1")){
//            $(".cp1").removeClass("check_border");
//        }
//        e.stopPropagation();
//    });
    var isCtrl = false;
    $(document).keydown(function(ev){
        var oEvent = ev||window.event;
        if (oEvent.ctrlKey) {
            isCtrl = true;
        }
        if(oEvent.ctrlKey&&oEvent.keyCode==65){
            $(".cra_con table tbody tr").addClass("tb_check");
            $(".btn01").addClass("check_org01");
            $(".btn02").addClass("check_org02");
            ev.preventDefault();
        }
    });
    $(document).keyup(function(ev){
        var oEvent = ev||window.event;
        if (oEvent.keyCode==17) {
            isCtrl = false;
        }
    });

    //点击缩略图显示大图
    var onoff00=true;
    $(".xp_right1 .cp1").each(function(i){
        $(this).data('index',i)
    });
    $(".xp_right1 .cp1").click(function(e){
        e.stopPropagation();
        $(".xp_right1 .zhezhao").removeClass("zhezhao_show");
        $(this).find(".zhezhao").addClass("zhezhao_show");
        if(isCtrl){
            $(this).toggleClass("check_border");
        }else{
            $(".xp_right1 .cp1").removeClass("check_border");
            $(this).addClass("check_border");
        }
        var i = $(this).data('index');
        curr=i;
        var link=$(this).find("img").attr("src");
        $(".cl_pic img").attr("src",link);
        $(".qcl_pic img").attr("src",link);
        onoff00=false;
    });

//   右二点击缩略图显示大图
    $(".xp_right2 .cp1").each(function(i){
        $(this).data('index',i)
    });
    $(".xp_right2 .cp1").click(function(e){
        e.stopPropagation();
        $(".xp_right2 .zhezhao").removeClass("zhezhao_show");
        $(this).find(".zhezhao").addClass("zhezhao_show");
        if(isCtrl){
            $(this).toggleClass("check_border");
        }else{
            $(".xp_right2 .cp1").removeClass("check_border");
            $(this).addClass("check_border");
        }
        var i = $(this).data('index');
        curr=i;
        var link=$(this).find("img").attr("src");
        $(".cl_pic img").attr("src",link);
        $(".qcl_pic img").attr("src",link);
        onoff00=true;
    });


//    做产品框选效果
//    $(".crb_con").mousedown(function(event){
//        $("#newlinediv").remove();
//        pconfig.startx=event.pageX;
//        pconfig.starty=event.pageY;
//        pconfig.beginx=event.pageX;
//        pconfig.beginy=event.pageY;
//        pconfig.divId="newlinediv";
//        var n=$("#"+pconfig.divId).length;
//        if(n<=0){
//            $("<div class='line00' id='newlinediv'></div>").appendTo(document.body);
//        }else{
//            $("#"+pconfig.divId).hide();
//        }
//        $(document).bind("mousemove",function(event){
//            $("#"+pconfig.divId).show();
//            pconfig.endx=event.pageX;
//            pconfig.endy=event.pageY;
//            pconfig.EndX=event.pageX;
//            pconfig.EndY=event.pageY;
//            console.log(pconfig.endx,pconfig.endy);
//            if(pconfig.endx<pconfig.beginx){
//                pconfig.startx=pconfig.endx;
//                pconfig.EndX=pconfig.beginx;
//            }
//            if(pconfig.endy<pconfig.beginy){
//                pconfig.starty=pconfig.endy;
//                pconfig.EndY=pconfig.beginy;
//            }
//            jswh();
//            $(".cra_con table tbody tr").removeClass("tb_check");
//            $(".btn01").removeClass("check_org01");
//            $(".btn02").removeClass("check_org02");
//            for(var i=0;i<$(".cra_con table tbody tr").length;i++){
//                var trH=$($(".cra_con table tbody tr")[i]).offset().top;
//                if(trH>pconfig.starty-40&&trH<pconfig.EndY){
//                    $($(".cra_con table tbody tr")[i]).addClass("tb_check");
//                    $($(".cra_con table tbody tr")[i]).find(".btn01").addClass("check_org01");
//                    $($(".cra_con table tbody tr")[i]).find(".btn02").addClass("check_org02");
//                }
//            }
//        });
//        $(document).bind("mouseup",function(e){
//            $(document).unbind("mousemove");
//            $("#newlinediv").remove();
//        });
//    });


//   产品表格效果
    $("tbody tr").hover(function(){
        $(this).find(".btn01").addClass("hover_org01");
        $(this).find(".btn02").addClass("hover_org02");
    },function(){
        $(".btn01").removeClass("hover_org01");
        $(".btn02").removeClass("hover_org02");
    });

    $("tbody tr").click(function(){
        if(isCtrl){
            $(this).toggleClass("tb_check");
            $(this).find(".btn01").toggleClass("check_org01");
            $(this).find(".btn02").toggleClass("check_org02");
        }else{
            $(".btn01").removeClass("check_org01");
            $(".btn02").removeClass("check_org02");
            $(this).find(".btn01").addClass("check_org01");
            $(this).find(".btn02").addClass("check_org02");
            $(this).addClass("tb_check").siblings().removeClass("tb_check");
        }
    });
//    隐藏图片
    $(".btn").click(function(){
        $(".xp_right1 .cra_con .cp1a img").toggle();
    });

    /*服次点击事件*/
    $(".xp_right2 .fuci_btn").click(function(){
        var fc=$(".xp_right2 .fuci").height()+15;
        $(".fuci_box2").css("top",fc+'px');
        $(".fuci_box2").slideToggle();
        $(this).find(".fc_dir").toggleClass("dir_up");
    });

    var ThumbH=function(){
        var SH=$(window).height();
        var FCH1=parseInt(SH)-$(".xp_right1 .fuci").outerHeight()-70;
        var FCH2=parseInt(SH)-$(".xp_right2 .fuci").outerHeight()-70;
        $(".cra_con01").css("height",FCH1+'px');
        $(".cra_con02").css("height",FCH2+'px');
    };

    //*************************************************************************************************************************
    var xx,yy,ww1,hh1,isdrag1,isdrag2;
    var bz_move=function(id,isdrag){
        $(id).bind('mousedown',function(e){
            xx= e.pageX;
            yy= e.pageY;
            ww1=$(this).width()+30;
            hh1=$(this).height();
            var	ATop=yy-$(this).offset().top,
                ALeft=xx-$(this).offset().left,
                WW=parseInt($(window).width()),
                WH=parseInt($(window).height())-150;
            isdrag=true;
            $(document).mousemove(function(e){
                var nn= 0,ss=hh1;
                if(isdrag){
                    var top=e.pageY-ATop-45,
                        left=e.pageX-ALeft;
                    top=(top<0)?0:top;
                    left=(left<nn)?nn:left;
                    top=(top>=WH-ss)?WH-ss:top;
                    left=(left>=WW-ww1)?WW-ww1:left;
                    $(id).css({"top":top+'px',"left":left+'px'});
                }
                e.preventDefault();
            });
        });
        $(document).mouseup(function(e) {
            isdrag = false;
            e.cancelBubble = true;
        });
    };
    bz_move(".one_page",isdrag1);
    bz_move(".all_pages",isdrag2);

    $(".reletive").hover(function(){
        $(this).find(".order_hover").toggle();
    });
    $(".unorder").click(function(){
        $(".order").removeClass("order_check");
        $(this).addClass("unorder_check");
    });
    $(".order").click(function(){
        $(".unorder").removeClass("unorder_check");
        $(this).addClass("order_check");
    });

    //底部选中状态
    $(".cz_btn").click(function(){
        $(".cz_btn").removeClass("top_check rotate_l_check rotate_r_check");
        if($(this).hasClass("rotate_l")){
            $(this).addClass("rotate_l_check");
        }else if($(this).hasClass("rotate_r")){
            $(this).addClass("rotate_r_check");
        }
        $(this).addClass("top_check");
    });


        //产品备注框hover
        $(".cp_bz").hover(function(){
            var trH=$(this).offset().top;
            var cpH=$(this).find(".cpbz_block").height();
            var tbH=parseInt($(".crb_con").offset().top)+parseInt($(".crb_con").height())-cpH-50;
            if(trH>tbH){
                $(this).find(".cpbz_block").css("top",-cpH+"px");
                $(this).find(".cp_dir").removeClass("cp_up").addClass("cp_down");
            }else{
                $(this).find(".cpbz_block").css("top","40px");
                $(".cp_dir").removeClass("cp_down");
            }
            $(this).find(".cpbz_block").toggle();
        });
});

