/**
 * Created by Administrator on 17317/2/24.
 */
var panel = document.getElementById("panel");
var menu = document.getElementById("menu");
var li = document.getElementsByTagName("li");
//右键自定义菜单
panel.oncontextmenu = function openMenu(e) {
    var x = e.pageX; //鼠标相对于页面位置
    var y = e.pageY;
    var wdt = window.innerWidth; //获取页面宽高
    var hgt  = window.innerHeight;
    console.log(hgt);
    event.returnValue = false; //屏蔽页面右键菜单
    menu.style.visibility = "visible";
    if (x > (wdt - 360) && y > (hgt - 173)) {
        menu.style.left = (x-360) + 'px';
        menu.style.top = (y-173) + 'px';
    } else if (x > (wdt - 360)) {
        menu.style.left = (x-360) + 'px';
        menu.style.top = y + 'px';
    } else if (y > (hgt - 173)) {
        menu.style.left = x + 'px';
        menu.style.top = (y-173) + 'px';
    } else {
        menu.style.left = x + 'px';
        menu.style.top = y + 'px';
    }
};
//菜单弹出内容
for (var i = 0; i < li.length;i++) {
    li[i].onmousedown = function menuAlert() { alert(this.innerHTML);}
}
//左键隐藏菜单
window.onmousedown = function() {
    menu.style.visibility = "hidden";
};