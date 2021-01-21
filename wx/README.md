# EventBusJS
微信小程序 事件总线
-----------------------------------------------

## 说明
* 在微信小程序中使用。
* 监听、取消监听、触发是件，都带有page参数，可以防止同一个页面重复监听事件，也可以避免发出的事件被当前页面收到。
* 在小程序Page()中，this.__route__ 可以指向当前页面的路由地址。

## 使用
###引入
每个要用到的页面都先引入：
``` javascript
import event from './event'
```
###初始化
方式1：调用init()初始化（全局仅需调用一次）
``` javascript
event.init()
```

方式2（推荐）：在app.js中，直接声明event对象，如:
``` javascript
App({
  event: {},
  // ...其他内容
})
```

###监听
event.on( eventName, page, function )
``` javascript
event.on('dosomething', this.__route__, (e) => console.log(e))
```

###取消监听
event.off( eventName, page )
``` javascript
event.off('dosomething', this.__route__)
```

###触发事件
event.emit( eventName, page, target )
``` javascript
event.emit('dosomething', this.__route__, {a: 1, b: 2})
```

## 配置
* eventLog: 是否打印日志

## License
Copyright © by [JAY](blog.oonne.com). All rights reserved.
