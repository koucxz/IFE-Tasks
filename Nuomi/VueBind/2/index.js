
// 观察者构造函数
function Observer(data) {
    this.data = data;
    this.makeObserver(data);
    this.eventsBus = new Event();
}

let p = Observer.prototype;

// 此函数用于深层次遍历对象的各个属性
p.setterAndGetter = function (key, val) {
    let self = this;
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
            self.eventsBus.emit(key, val, newVal);
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

p.$watch = function(attr, callback){
    this.eventsBus.on(attr, callback);
}

//实现一个事件
function Event(){
    this.events = {};
}

Event.prototype.on = function(attr, callback){
    if(this.events[attr]){
        this.events[attr].push(callback);
    }else{
        this.events[attr] = [callback];
    }
}

Event.prototype.off = function(attr){
    for(let key in this.events){
        if(this.events.hasOwnProperty(key) && key === attr){
            delete this.events[key];
        }
    }
}

Event.prototype.emit = function(attr, ...arg){
    this.events[attr] && this.events[attr].forEach(function(item){
        item(...arg);
    })
}

let app1 = new Observer({
    name: 'youngwind',
    age: 25
});

app1.data.name = {
    lastName: 'liang',
    firstName: 'shaofeng'
};

app1.data.name.lastName;
// 这里还需要输出 '你访问了 lastName '
app1.data.name.firstName = 'lalala';
// 这里还需要输出 '你设置了firstName, 新的值为 lalala'

app1.$watch('age', function(oldAge, age) {
    console.log(`我的年纪变了，现在已经是：${age}岁了`)
});

app1.data.age = 100; // 输出：'我的年纪变了，现在已经是100岁了'