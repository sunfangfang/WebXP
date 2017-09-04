/**
 * Created by y on 2016/7/22.
 */
$(function(){

    function MM_jumpMenu(targ, selObj, restore) { //v3.0
        eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
        if (restore) selObj.selectedIndex = 0;
    }


    /*点击出高度*/
    function Heightg() {
        var c_bottomlines = $(".tb_hide");
        var f;
        if (c_bottomlines.is(":visible")) {
            f = 430;
        }
        else {
            f = 215;
        }
        var Heights = $(window).height();
        var Heightsmun = parseInt(Heights) - f;
        $(".c_tab").css({"height": Heightsmun});
        $(".fb_contain").css({"height": Heightsmun - 81})
    }
    $(window).resize(function () {
        Heightg();
    });
    $(window).load(function () {
        Heightg();
    });
    /*按钮点击图片切换*/
    $(".c_tabsam").click(function () {
        $(this).toggleClass("c_tabsa");
        $(this).siblings().toggleClass("blocks");
        $(this).parent().siblings().toggleClass("blocks");
    });
    /*tab切换*/
    $(".cul_bottom>li").click(function () {
        $(this).addClass("cul_bottomli").siblings().removeClass("cul_bottomli");
        $(".c_tab").eq($(this).index()).css({"display": "block"}).siblings().css({"display": "none"});
    });
    /*top下拉*/
    function mclick() {
        var header = $(".tb_hide");
        if (header.is(":visible")) {
            header.slideUp();
            $(".c_font").text("显示信息").removeClass("color_ps");
            $(".c_bg").removeClass("c_bgs");
            $(".c_topcur").addClass("c_bottomcur");
            var Heights = $(window).height();
            var Heightsmun = parseInt(Heights) - 215;
            $(".c_tab").css({"height": Heightsmun});
        }
        else {
            header.slideDown();
            $(".c_font").text("收起信息").addClass("color_ps");
            $(".c_bg").addClass("c_bgs");
            $(".c_topcur").removeClass("c_bottomcur");
            var Heights = $(window).height();
            var Heightsmun = parseInt(Heights) - 430;
            $(".c_tab").css({"height": Heightsmun});
        }
    }
    $(".c_head5").click(function () {
        mclick();
    });
    $(".c_bottomline").click(function () {
        mclick();
    });
    $(window).resize(function () {
        var aa = $(document).height();
    });
    /*隔行换色*/
    $(".ta_bg tr:even").addClass("tr_styles");
    $(".ta_bga tr:even").addClass("tr_styles");
    $("table>tbody>tr").click(function () {
        $(this).addClass("tr_style").siblings().removeClass("tr_style");
    });
    /*li悬浮*/
    $(".li_xf").mouseover(function () {
        $(".div_con").css({"display": "block"});
    }).mouseout(function () {
        $(".div_con").css({"display": "none"});
    });
    $(".li_xf1").mouseover(function () {
        $(".div_con1").css({"display": "block"});
    }).mouseout(function () {
        $(".div_con1").css({"display": "none"});
    });
    $(".ul_lis>li").click(function () {
        $(this).find(".posi_mh").addClass("span_qued").parent().siblings().find(".posi_mh").removeClass("span_qued");
    });
    /*图片点击*/
    $(".c_tabs1>.tp_tabs").click(function () {
        $(this).find(".bgh").css({"display": "block"}).closest(".c_tabs1").siblings().find(".bgh").css({"display": "none"});
        $(this).css({"box-shadow": "3px 3px 9px #cccccc"}).closest(".c_tabs1").siblings().find(".tp_tabs").css({"box-shadow": "none"});
        var tp_img = $(this).find("img");
        var tp_imgsrc = tp_img.attr("src");
        $(".div_imgs").find("img").attr("src", tp_imgsrc);
        $(".span_num").text($(this).closest(".c_tabs1").index());
    });
    /*图片悬浮*/
    $(".c_tabs1").hover(function () {
        $(this).find(".bgh").addClass("blocks");
        $(this).find(".tp_tabs").addClass("textshdaow");
    }, function () {
        $(this).find(".bgh").removeClass("blocks");
        $(".tp_tabs").removeClass("textshdaow");
    });
    /*图片右击事件*/
    $('.c_tab1').mousedown(function (e) {
        if (3 == e.which) { //鼠标右键3 中键2 鼠标左键1
            alert(1);
            $(".tc_ul").slideDown();
            $(this).siblings().prev().next().css({"display": "block"});
            $(document).not($(".c_tab1")).click(function () {
                $(".tc_ul").hide();
                $(".black_bg").slideUp();
                $(".tp_tabs").removeClass("tp_tabsd");
            });
        }
    });

    /*阻止浏览器右击出现弹窗*/
    document.oncontextmenu = function (ev) {
        var ev = ev || event;
        return false;
    };
    /*侧划*/
    //$(window).load(function () {
    //    CLW();
    //});
    //$(window).resize(function () {
    //    CLW();
    //});
    //function CLW() {
    //    var CxW = $(window).width();
    //    var dd;
    //    if (kaiguan1 == true && kaiguan2 == true) {
    //        dd = 360;
    //    }
    //    else if (kaiguan1 == true && kaiguan2 == false) {
    //        dd = 203;
    //    }
    //    else if (kaiguan1 == false && kaiguan2 == true) {
    //        dd = 203;
    //    }
    //    else if (kaiguan1 == false && kaiguan2 == false) {
    //        dd = 45;
    //    }
    //    var CxcW = parseInt(CxW) - dd;
    //    $(".c_tab4").css("width", CxcW);
    //}
    //
    //var kaiguan1 = true;
    //$(".c_tabg").click(function () {
    //    if (kaiguan1) {
    //        var aa = $(".c_tab4").width();
    //        $(".c_tab4").animate({"width": aa + 158}, 0);
    //        $(this).find(".c_leftcur").addClass("c_rightcur");
    //        kaiguan1 = false;
    //    }
    //    else {
    //        var aa = $(".c_tab4").width();
    //        $(".c_tab4").animate({"width": aa - 158}, 0);
    //        $(this).find(".c_leftcur").removeClass("c_rightcur");
    //        kaiguan1 = true;
    //    }
    //    $(this).toggleClass("rights");
    //    $(this).prev().animate({width: 'toggle'}, 0);
    //});
    //var kaiguan2 = true;
    //$(".c_tabga").click(function () {
    //    if (kaiguan2) {
    //        var aa = $(".c_tab4").width();
    //        $(".c_tab4").animate({"width": aa + 158}, 0);
    //        $(this).find(".c_leftcur").addClass("c_rightcur");
    //        kaiguan2 = false;
    //    }
    //    else {
    //        var aa = $(".c_tab4").width();
    //        $(".c_tab4").animate({"width": aa - 158}, 0);
    //        $(this).find(".c_leftcur").removeClass("c_rightcur");
    //        kaiguan2 = true;
    //    }
    //    $(this).toggleClass("rights");
    //    $(this).prev().animate({width: 'toggle'}, 0);
    //    $(".span_cur").toggleClass("span_curleft");
    //});


    ////主页面左侧宽自适应
    $(window).load(function(){
        var CxW = $(window).width();
        var CxcW = parseInt(CxW) - 352;
        $(".c_tab4").css("width", CxcW);
    });
    $(window).resize(function() {
        CLW();
    });
    function CLW() {
        var CxW=$(window).width();
        $(".c_tabg").css('left',num[0]);
        $(".c_tabga").css("left",num[0]+num[1]);
        $(".c_tab4").css("width",CxW-num[-0]-num[1]-16+'px');
    }
    //    左右拖拽
    var num=[];
    var x1=$(".c_tab1").width();
    var x2=$(".c_tab3").width();
    var x3=$(".c_tab4").width();
    num=[x1,x2,x3];
    var clickX, leftOffset, inx, nextW2, nextW;
    var dragging  = false;
    var doc 	  = document;
    var labBtn 	  = $(".c_tab2");
    var wrapWidth;

    labBtn.bind('mousedown',function(){
        wrapWidth = $(".c_tab").width();
            dragging   = true;
            leftOffset = 0;
            inx 	   = $(this).index('.c_tab2');


        }
    );

    doc.onmousemove = function(e){
        if (dragging) {
            clickX = e.pageX;
            //判断第几个拖动按钮
            if( inx == 0 ){
                if(clickX > leftOffset) {
                    $(".c_tabg").css('left', clickX + 'px');//按钮移动
                    $(".c_tab1").width( clickX + 'px');
                    $(".c_tab4").width( wrapWidth - clickX-$(".c_tab3").width()-1 + 'px');
                    $(".c_tabga").css('left',clickX+$('.c_tab3').width()+'px');
                }else if($(".c_tabg").offset().left<= leftOffset+5){
                    $(".c_tabg").css('left', '0px');
                    $(".c_tab1").width('0px');
                    $(".c_tabga").css('left', $(".c_tab3").width() + 'px');
                    $(".c_tab4").width( wrapWidth - (".c_tab3").width() - 1+"px");
                }
                if( $(".c_tabga").offset().left >=(wrapWidth-10)) {
                    //第一个按钮右边不出界
                    $(".c_tab1").width( wrapWidth -$(".c_tab3").width() -1+'px');
                    $(".c_tabg").css('left', ($(".c_tab1").width() -5)+'px');//减去按钮的宽度
                    $(".c_tabga").css('left', wrapWidth -5 + 'px');
                    //第一个按钮左右容器，右边不出界
                    $(".c_tab4").width( '0px' );
                }

            }else{
                //第三个拖动按钮左边不出界
                if( (clickX) > $(".c_tabg").offset().left + 10 ) {
                    $(".c_tabga").css('left', clickX + 'px'); //按钮移动
                    $(".c_tab3").width( (clickX-$(".c_tab1").width()) + 'px');
                    nextW = clickX+1;
                    $(".c_tab4").width( wrapWidth - nextW + 'px');
                } else if ((clickX) <= $(".c_tabg").offset().left + 10) {
                    //第三个按钮向左移动不出界
                    $(".c_tabga").css("left",$(".c_tab1").width()+10+'px');
                    //第三个按钮左右容器，不出界
                    $(".c_tab3").width('10px');
                    $(".c_tab4").width( wrapWidth- $(".c_tab3").width() - $(".c_tab1").width()-1+"px");
                }

                if( clickX >= wrapWidth-10 ) {
                    //第三个按钮右边不出界
                    $(".c_tabga").css('left', wrapWidth -5 + 'px'); //减去按钮的宽度
                    //第三个按钮左右容器，右边不出界
                    $(".c_tab3").width( wrapWidth - $(".c_tab1").width()-1+'px');
                    $(".c_tab4").width( '0px' );
                }
            }
        }
        e.preventDefault();
    };
    $(doc).mouseup(function(e) {
        dragging = false;
        e.cancelBubble = true;
        var x1=$(".c_tab1").width();
        var x2=$(".c_tab3").width();
        var x3=$(".c_tab4").width();
        num=[x1,x2,x3];
    });


    $(".cp1").click(function(){
        $(".cp1").removeClass("check_border");
        $(this).addClass("check_border");
    });


});

