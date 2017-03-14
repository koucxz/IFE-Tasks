/**
 * Created by Administrator on 2017/3/13.
 */
var btn = document.getElementsByTagName('button'),
    telInput =document.getElementById('tel-num'),
    telResult =document.getElementById('tel-result'),
    strInput =document.getElementById('str-in'),
    strResult =document.getElementById('str-result');

// 判断给定数字是否为手机号码
function isTel(num) {
    var reg = /^1[34578]\d{9}$/;
    return reg.test(num);
}

// 判断输入的字符串是否有相邻重复单词
function isRepeat(str) {
    var reg1 = /(\b\w+\b)\s+\1/,
        reg2 = /(\b\w+\b).+\s+\1/;
    if (reg1.test(str)) {
        return '发现相邻重复单词';
    }
    else if (reg2.test(str)) {
        return '有重复单词但是不相邻';
    }
    else {
        return '未发现重复单词';
    }
}

btn[0].onclick = function () {
    var telVal = telInput.value;
    telResult.innerHTML = isTel(telVal) ? '输入正确':'请输入一个正确的手机号码';
};

btn[1].onclick = function () {
    var strVal = strInput.value;
    strResult.innerHTML = isRepeat(strVal);
};
