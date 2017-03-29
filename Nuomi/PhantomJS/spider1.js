/**
 * Created by Administrator on 2017/3/26.
 */
// var webPage = require('webpage'),
//     page = webPage.create();
//
// page.includeJs(
//     'https://www.baidu.com',function () {
//         page.evaluate(function () {
//             console.log(document.getElementById("kw"));
//             // document.getElementById("kw").innerHTML = "phantomjs";
//             // document.getElementById("su").click();
//         })
//         page.onResourceRequested = function(request) {
//             console.log('Request ' + JSON.stringify(request, undefined, 4));
//         };
//         phantom.exit();
//     }
// )

var webPage = require('webpage');
var page = webPage.create();
var pageTb = webPage.create();
var tbUrl = "https://item.taobao.com/item.htm?id=520115087331";
var bdUrl = "https://www.baidu.com"

page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36";

pageTb.open(bdUrl, function(status) {
    
    // 由于是拉取异步数据，我们打开页面后，等待12s再去操作dom，获取交易量
    setTimeout(function() {
        var result = pageTb.evaluate(function() {
            return document.getElementById("su").value;
        });
        console.log(result);
        phantom.exit();
    }, 12000);
});