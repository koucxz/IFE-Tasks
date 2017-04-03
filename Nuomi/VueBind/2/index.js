
// 观察者构造函数
function Observer(data) {
    this.data = data;
    this.makeObserver(data);
}

let p = Observer.prototype;

// 此函数用于深层次遍历对象的各个属性
// 采用的是递归的思路
// 因为我们要为对象的每一个属性绑定getter和setter
p.setterAndGetter = function (key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            console.log('你访问了' + key);
            return val;
        },
        set: function(newVal){
            console.log('你设置了' + key);
            console.log('新的' + key + '=' + newVal);
            val = newVal;
            if(typeof newVal === 'object'){
                new Observer(val);
            }
        }
    })
}
p.makeObserver = function (obj) {
    let val;
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            val = obj[key];
            //深度遍历
            if(typeof val === 'object'){
                new Observer(val);
            }
        }
        this.setterAndGetter(key, val);
    }
}


let app1 = new Observer({
    name: 'youngwind',
    age: 25
});

app1.data.name = {
    lastName: 'liang',
    firstName: 'shaofeng'
};