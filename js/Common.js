function myAlert(message) {
    //判断如果没有加载css,则加载样式文件
    if ($('link[href$="easydialog.css"]').length == 0) {
        var head = document.getElementsByTagName('head').item(0);
        var style = document.createElement('link');
        style.href = '/scripts/easydialog/easydialog.css';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        head.appendChild(style);
    }
    //如果没有加载弹窗js,则加载js文件
    if ($('script[src$="easydialog.min.js"]').length == 0) {
        $("<script type = 'text/javascript' src='/scripts/easydialog/easydialog.min.js'><\/script>").appendTo("head");
    }
    var content = message;                  //弹窗内容
    var delay = arguments[1] || 2000;

    var btnFn = function () {
        easyDialog.close();
    };

    easyDialog.open({
        container: {
            header: '提示',
            content: content,
            yesFn: btnFn
        }
        //autoClose: delay
    });
}

//btnYesFn确定按钮的回调函数，回调函数返回false将不关闭弹出层，回调函数的this指向easyDialog，无参数将不显示按钮。
//btnNoFn 回调函数返回false将不关闭弹出层，回调函数的this指向easyDialog，参数为true，那么取消按钮仅有关闭弹出层的功能，无参数将不显示按钮。
function myConfirm(message, btnYesFn, btnNoFn) {
    //判断如果没有加载css,则加载样式文件
    if ($('link[href$="easydialog.css"]').length == 0) {
        var head = document.getElementsByTagName('head').item(0);
        var style = document.createElement('link');
        style.href = '/scripts/easydialog/easydialog.css';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        head.appendChild(style);
    }
    //如果没有加载弹窗js,则加载js文件
    if ($('script[src$="easydialog.min.js"]').length == 0) {
        //使用jQuery的方式加载js文件
        $("<script type = 'text/javascript' src='/scripts/easydialog/easydialog.min.js'><\/script>").appendTo("head");
    }

    easyDialog.open({
        container: {
            header: '提示',
            content: message,
            yesFn: btnYesFn,
            noFn: btnNoFn
        }
    });
}

//只有一个确定按钮的confirm弹框
function myConfirm2(message, btnYesFn) {
    //判断如果没有加载css,则加载样式文件
    if ($('link[href$="easydialog.css"]').length == 0) {
        var head = document.getElementsByTagName('head').item(0);
        var style = document.createElement('link');
        style.href = '/scripts/easydialog/easydialog.css';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        head.appendChild(style);
    }
    //如果没有加载弹窗js,则加载js文件
    if ($('script[src$="easydialog.min.js"]').length == 0) {
        //使用jQuery的方式加载js文件
        $("<script type = 'text/javascript' src='/scripts/easydialog/easydialog.min.js'><\/script>").appendTo("head");
    }
    easyDialog.open({
        container: {
            header: '提示',
            content: message,
            yesFn: btnYesFn
        },
        callback: btnYesFn,
        drag: false //是否可拖拽 true 可拖拽，false 禁用拖拽，不传参默认为不可拖拽
    });
}

String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.LTrim = function () {
    return this.replace(/(^\s*)/g, "");
}
String.prototype.RTrim = function () {
    return this.replace(/(\s*$)/g, "");
}

// 对Date的扩展，将 Date 转化为指定格式的String   
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function (fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1,                 //月份   
        "d+": this.getDate(),                    //日   
        "h+": this.getHours(),                   //小时   
        "m+": this.getMinutes(),                 //分   
        "s+": this.getSeconds(),                 //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
// 给日期类对象添加日期差方法，返回日期与diff参数日期的时间差，单位为天
Date.prototype.diffDay = function (date) {
    return (this.getTime() - date.getTime()) / (24 * 60 * 60 * 1000);
}
// 给日期类对象添加日期差方法，返回日期与diff参数日期的时间差，单位为年
Date.prototype.diffYear = function (date) {
    return (this.getFullYear() - date.getFullYear());
}
// 给日期类对象添加日期差方法，返回日期与diff参数日期的时间差，单位为天
Date.prototype.diffDays = function (date1, date2) {
    return (new Date(date2).getTime() - new Date(date1).getTime()) / (24 * 60 * 60 * 1000);
}
//获取星期几
function GetWeek(time) {
    var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    return dayNames[new Date(time).getDay()];
}
//比较两个日期
function dateCompare(date1, date2) {
    date1 = date1.replace(/\-/gi, "/");
    date2 = date2.replace(/\-/gi, "/");
    var time1 = new Date(date1).getTime();
    var time2 = new Date(date2).getTime();
    if (time1 > time2) {
        return 3;
    }
    else if (time1 == time2) {
        return 2;
    }
    else {
        return 1;
    }
}
function myformatter(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
}
function myparser(s) {
    if (!s) return new Date();
    var ss = (s.split('-'));
    var y = parseInt(ss[0], 10);
    var m = parseInt(ss[1], 10);
    var d = parseInt(ss[2], 10);
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        return new Date(y, m - 1, d);
    } else {
        return new Date();
    }
}

var paddNum = function (num) {
    num += "";
    return num.replace(/^(\d)$/, "0$1");
}

//格式化日期 eg: 2016-05-15 返回20160515
function getFormatDate(date) {
    return date.replace(/\-/g, "");
}

//格式化日期 eg: 20160515 返回2016-05-15
function getNowFormatDate(date) {
    var s = "";
    if (date != null && date != undefined && date.length == 8) {
        s = date.substr(0, 4) + "-" + date.substr(4, 2) + "-" + date.substr(6, 2);
    }
    return s;
}

//格式化时间 eg: 1000 返回10:00
function getFormatTime(date) {
    var s = "";
    if (date != null && date != undefined && date.length == 4) {
        s = date.substr(0, 2) + ":" + date.substr(2, 2);
    }
    return s;
}

//当前日期 eg:2015-08-14
function CurentTime() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    month = month < 10 ? ('0' + month) : month;
    day = day < 10 ? ('0' + day) : day;

    var clock = year + "-" + month + "-" + day;
    return (clock);
}
//获得当前日期（不带格式） eg:20150814
function CurrentTimeWithoutFormat() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    month = month < 10 ? ('0' + month) : month;
    day = day < 10 ? ('0' + day) : day;

    var clock = year + month + day;
    return (clock);
}
//当前日期 eg:20060702080904423 
function CurentTimeEx() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds(); 		//秒
    var fff = now.getMilliseconds(); 	//毫秒

    month = month < 10 ? ('0' + month) : month;
    day = day < 10 ? ('0' + day) : day;

    var clock = year + month + day + hh + mm + ss + fff;
    return (clock);
}
//当前时分 eg:0910
function CurentHour() {
    var now = new Date();
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    hh = hh < 10 ? ('0' + hh) : hh;
    mm = mm < 10 ? ('0' + mm) : mm;
    return (hh + '' + mm);
}
//当前时间 eg:2015-11-15 11:19:53
function CurrentSeconds() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds(); 		//秒

    month = month < 10 ? ('0' + month) : month;
    day = day < 10 ? ('0' + day) : day;
    hh = hh < 10 ? ('0' + hh) : hh;
    mm = mm < 10 ? ('0' + mm) : mm;
    ss = ss < 10 ? ('0' + ss) : ss;

    var clock = year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + ss;
    return (clock);
}
//当前时间 eg:2015-11-15 11:19
function CurrentDateTime() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分

    month = month < 10 ? ('0' + month) : month;
    day = day < 10 ? ('0' + day) : day;
    hh = hh < 10 ? ('0' + hh) : hh;
    mm = mm < 10 ? ('0' + mm) : mm;

    var clock = year + '-' + month + '-' + day + ' ' + hh + ':' + mm;
    return (clock);
}
//日期加几天
function AddDays(dd, dadd) {
    //可以加上错误处理
    var a = new Date(dd);
    a = a.valueOf();
    a = a + dadd * 24 * 60 * 60 * 1000;
    a = new Date(a);
    var m = a.getMonth() + 1;
    if (m.toString().length == 1) {
        m = '0' + m;
    }
    var d = a.getDate();
    if (d.toString().length == 1) {
        d = '0' + d;
    }
    return a.getFullYear() + "-" + m + "-" + d;
}
//日期加几月
function AddmulMonth(dtstr, n) {   // n个月后
    var s = dtstr.split("-");
    var yy = parseInt(s[0]);
    var mm = parseInt(s[1]) - 1;
    var dd = parseInt(s[2]);
    var dt = new Date(yy, mm, dd);
    dt.setMonth(dt.getMonth() + n);
    if ((dt.getYear() * 12 + dt.getMonth()) > (yy * 12 + mm + n)) {
        dt = new Date(dt.getYear(), dt.getMonth(), 0);
    }
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    var days = dt.getDate();
    if (days.toString().length == 1) {
        days = '0' + days;
    }
    var dd = year + "-" + month + "-" + days;
    return dd;
}
//格式化时间
function getTime(arguments, obj) {
    var pa = /.*\((.*)\)/;
    var unixtime = arguments.match(pa)[1].substring(0, 10);
    var ts = unixtime || 0;
    var t, y, m, d, h, i, s;
    t = ts ? new Date(ts * 1000) : new Date();
    y = t.getFullYear();
    m = t.getMonth() + 1;
    d = t.getDate();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    if (obj == "1") {
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
    } else if (obj == "2") {
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i);
    } else {
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
    }
}
//获取当前月的第一天
function getCurrentMonthFirst() {
    var date = new Date();
    date.setDate(1);
    return date.Format("yyyy-MM-dd");
}
//获取当前月的最后一天
function getCurrentMonthLast() {
    var date = new Date();
    var currentMonth = date.getMonth();
    var nextMonth = ++currentMonth;
    var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay).Format("yyyy-MM-dd");
}

// 根据生日的月份和日期计算星座
function getAstro(month, day) {
    var s = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(month * 2 - (day < arr[month - 1] ? 2 : 0), 2);
}

//获取cookie
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
}

//获取cookie
function getCookieTo(objName, objkey) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var arg = objName + "=";
        var alen = arg.length;
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) {
            var getname = unescape(arrStr[i].substring(alen, arrStr[i].length));
            var tm = getname.split("&");
            for (var j = 0; j < tm.length; j++) {
                var tmp = tm[j].split("=");
                if (tmp[0] == objkey) {
                    return unescape(tmp[1]);
                }
            }
        }
    }
}

//全选/反选
function SelectAll(obj, ckbName) {
    $("#" + obj + "").change(function () {
        if (document.getElementById(obj).checked) {
            $("input[name='" + ckbName + "']").prop("checked", true);
        } else {
            $("input[name='" + ckbName + "']").prop("checked", false);
        }

    });
}

//jquery select 根据text选中
function selected(id, value) {
    $("#" + id + " option:first").attr('selected', true);
    $("#" + id + " option").each(function () {
        if ($.trim($(this).text()) == $.trim(value)) {
            $(this).attr('selected', true);
        }
    });
}

//请求后台webmethod方法 同步
function ajaxWebService(url, dataMap, fnSuccess) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: url,
        data: dataMap,
        dataType: "json",
        async: false,
        success: fnSuccess
    });
}
//请求后台webmethod方法 异步
function ajaxWebServiceAsync(url, dataMap, fnSuccess) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: url,
        data: dataMap,
        dataType: "json",
        async: true,
        success: fnSuccess
    });
}

//验证中文	
function isChinese(obj) {
    var reg = /.*[\u4e00-\u9fa5]+.*$/;
    return reg.test(obj) ? true : false;
}

//验证非空
function CheckNull(obj) {
    if (obj == null || obj == "") {
        return false;
    } else
        return true;
}

//验证手机号
function CheckTel(tel) {
    var reg = /^0?1[3|4|5|7|8|9][0-9]\d{8}$/;
    if (reg.test(tel)) {
        return true;
    } else {
        return false;
    }
}

//验证正整数 48-57 96-105 event.keyCode|| event.which
function onlyNumber() {
    if ((event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 96) || (event.keyCode > 105)) {
        event.returnValue = false;
    }
}

//正整数
function onlyNum(obj) {
    obj.value = obj.value.replace(/[^\d]/g, '');
    //obj.value = obj.value.replace(/[^(-|\+)?\d+$]/g, '');
}

function onlyNum1(obj) {
    obj.value = obj.value.replace(/[^\d]/g, '');
    if (obj.value == "") {
        obj.value = 1;
    }
}
//整数 （包括负数）
function onlyNum2(obj) {
    if (obj.value != "") {
        var reg = /^(-|\+)?\d+$/;
        if (reg.test(obj.value)) {
            return true;
        } else {
            alert("数值不正确");
            return false;
        }
    }
}

//验证小数正
function CheckDecimal(obj) {
    if (obj.value != "") {
        var val = parseFloat(obj.value);
        var reg = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
        if (reg.test(val)) {
            obj.value = val;
            return true;
        } else {
            obj.value = "0";
            obj.focus();
            return false;
        }
    }
}
//验证小数 可正可负
function CheckDecimalex(obj) {
    if (obj.value != "") {
        var val = parseFloat(obj.value);
        var reg = /^-?(([1-9]\d*)|\d)(\.\d{1,2})?$/;
        if (reg.test(val)) {
            obj.value = val;
            return true;
        } else {
            obj.value = "0";
            obj.focus();
            return false;
        }
    }
}
//验证时分 0000-2359
function onlyTime(obj) {
    if (undefined != obj && "" != obj.value) {
        var reg = /^[0-2][0-9][0-5][0-9]$/;
        if (reg.test(obj.value)) {
            if (parseInt(obj.value.substr(0, 2)) > 23) {
                obj.value = "";
                obj.focus();
                return false;
            } else {
                return true;
            }
        } else {
            obj.value = "";
            obj.focus();
            return false;
        }
    }
}

//验证object{}
function isEmptyObject(obj) {
    for (var n in obj) { return false }
    return true;
}


//获取当前页的的url参数。name代表参数名
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//判断字符串是否是Int型
function IsInt(str) {
    re = /^\d+$/;
    if (re.test(str)) {
        if (str.length > 1) {
            if (str.substring(0, 1) != "0") return true;
            else return false;
        } else return true;
    } else return false;
}

//判断字符串是否是由0-9,a-z,A-Z,-和_ 组成的字符串  且必须以字母开头 （验证微博和微信账号）
function ValidString(str) {
    for (var i = 0; i < str.length; i++) {
        lls = str.substring(i, i + 1);
        if (!((lls >= '0' && lls <= '9') || (lls >= 'A' && lls <= 'Z') || (lls >= 'a' && lls <= 'z') || lls == '-' || lls == '_'))
            return false;
    }
    return true;
}

//判断字符串是否是由0-9,a-z,A-Z,组成的字符串。验证用户名是否是数字，字母。
function ValidUserName(str) {
    for (var i = 0; i < str.length; i++) {
        lls = str.substring(i, i + 1);
        if (!((lls >= '0' && lls <= '9') || (lls >= 'A' && lls <= 'Z') || (lls >= 'a' && lls <= 'z')))
            return false;
    }
    return true;
}


function checkDate(RQ) {
    var date = RQ;
    var result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (result == null)
        return false;
    var d = new Date(result[1], result[3] - 1, result[4]);
    return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4]);
}

function CutString(str, length, replace) {
    if (str.length > length) {
        return str.substring(0, length) + replace;
    } else {
        return str;
    }
}

//判断是否有权限 返回bool值
function JudgeHaveRight(ID) {
    var res = false;
    ajaxWebService("/Customer/detail.aspx/IsAccess", "{'ID':'" + ID + "'}", function (result) {
        if (result.d == true) {
            res = true;
        } else {
            res = false;
        }
    });
    return res;
}





/**   
* 获取本周、本季度、本月、上月的开端日期、停止日期   
*/
var now = new Date(); //当前日期   
var nowDayOfWeek = now.getDay(); //今天本周的第几天   
var nowDay = now.getDate(); //当前日   
var nowMonth = now.getMonth(); //当前月   
var nowYear = now.getYear(); //当前年   
nowYear += (nowYear < 2000) ? 1900 : 0; //  

var lastMonthDate = new Date(); //上月日期   
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
var lastYear = lastMonthDate.getYear();
var lastMonth = lastMonthDate.getMonth();

//格局化日期：yyyy-MM-dd   
function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    return (myyear + "-" + mymonth + "-" + myweekday);
}

//获得某月的天数   
function getMonthDays(myMonth) {
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

//获得本季度的开端月份   
function getQuarterStartMonth() {
    var quarterStartMonth = 0;
    if (nowMonth < 3) {
        quarterStartMonth = 0;
    }
    if (2 < nowMonth && nowMonth < 6) {
        quarterStartMonth = 3;
    }
    if (5 < nowMonth && nowMonth < 9) {
        quarterStartMonth = 6;
    }
    if (nowMonth > 8) {
        quarterStartMonth = 9;
    }
    return quarterStartMonth;
}

//获得本周的开端日期   
function getWeekStartDate() {
    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
    return formatDate(weekStartDate);
}

//获得本周的停止日期   
function getWeekEndDate() {
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
    return formatDate(weekEndDate);
}

//获得本月的开端日期   
function getMonthStartDate() {
    var monthStartDate = new Date(nowYear, nowMonth, 1);
    return formatDate(monthStartDate);
}

//获得本月的停止日期   
function getMonthEndDate() {
    var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
    return formatDate(monthEndDate);
}

//获得上月开端时候   
function getLastMonthStartDate() {
    var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
    return formatDate(lastMonthStartDate);
}

//获得上月停止时候   
function getLastMonthEndDate() {
    var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
    return formatDate(lastMonthEndDate);
}

//获得本季度的开端日期   
function getQuarterStartDate() {

    var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
    return formatDate(quarterStartDate);
}

//或的本季度的停止日期   
function getQuarterEndDate() {
    var quarterEndMonth = getQuarterStartMonth() + 2;
    var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth));
    return formatDate(quarterStartDate);
}


//获得今年开始日期
function getNowYearStartDate() {
    return nowYear + "-01-01";
}

//获得今年结束日期   
function getNowYearEndDate() {
    return nowYear + "-12-31";
}


//检查手机号系统中是否已存在
function CheckTell(tel) {
    if ($.trim(tel) != "") {
        ajaxWebService("/main.aspx/CheckTell", "{'tel':'" + tel + "'}", function (result) {
            if (result.d == "true") {
                myAlert("系统中已存在该手机号，这只是一个提示信息，你仍然可以继续保存");
            }
        });
    }
}
/**
* 将数值四舍五入(保留2位小数)后格式化成金额形式
*
* @param num 数值(Number或者String)
* @return 金额格式的字符串,如'1,234,567.45'
* @type String
*/
function formatMoney(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    var sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    var cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
    num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}
//还原金额格式  '1,234,567.45' ==> '1234567.45'
function rMoney(s) {
    return parseFloat(s.replace(/[^\d\.-]/g, ""));
}

//替换字符中的半角单引号 和双引号
function EscapeChar(str) {
    if (str != null && str != undefined) {
        str = str.toString().replace(/\'/g, "＇"); //替换英文半角单引号为英文全角单引号
        str = str.toString().replace(/\"/g, "＂"); //替换英文半角双引号为英文全角双引号
        str = str.toString().replace(/\\/g, "＼"); //替换英文半角 斜杠为英文全角的

        //str = str.replace(/\'/g, "&#39;"); //替换英文半角单引号为HTML 字符实体
        //str = str.replace(/\"/g, "&#34;"); //替换英文半角双引号为HTML 字符实体
        return str;
    } else {
        return "";
    }
}






//判断当前服次是否已经完成
function IsFinishedCurFC() {
    var CustomerID = $("#hidCustomerID").val();
    var fc = $("#hidCurrentFC").val();
    var flag = false;
    ajaxWebService("/PhotoDetail.aspx/IsFinishedCurFC", "{'CustomerID':'" + CustomerID + "','fc':'" + fc + "'}", function (result) {
        if (result.d == "1") {
            flag = true;
        }
    });
    return flag;
}


//判断是否已经作废本单
function IsBlankOutAnnal() {
    var CustomerID = $("#hidCustomerID").val();
    var flag = false;
    ajaxWebService("/BaseInfo.aspx/IsBlankOutAnnal", "{'CustomerID':'" + CustomerID + "'}", function (result) {
        if (result.d == "1") {
            flag = true;
        }
    });
    return flag;
}

//判断是否已经填写总完成日期
function IsFinished() {
    var CustomerID = $("#hidCustomerID").val();
    var flag = false;
    ajaxWebService("/BaseInfo.aspx/IsFinished", "{'CustomerID':'" + CustomerID + "'}", function (result) {
        if (result.d == "1") {
            flag = true;
        }
    });
    return flag;
}