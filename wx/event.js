const config = {
  eventLog: true,
}

const event = {};

export default {
  /**
   * 监听
   * @params {string} name 事件名
   * @params {string} page 当前页面
   * @params {function} callback 触发时的回调
   */ 
  on: (name, page, callback)=>{
    event[name] = event[name] || [];

    const oldEvent = event[name].find(e => e.page === page);

    if (oldEvent) {
      oldEvent.page = page;
      oldEvent.callback = callback;
    } else {
      event[name].push({
        page,
        callback,
      });
    }
    
    // 打印日志
    if (config.eventLog) {
      console.groupCollapsed(`%c  ${page} 监听事件 %c ${name}`, 'color:#e0c184; font-weight: bold', 'color:#f0a139; font-weight: bold');
      console.log(`%c 事件总线`, 'color:#ff65af; font-weight: bold', event);
      console.groupEnd();
    }
  },

  /**
   * 取消监听
   * @params {string} name 事件名
   * @params {string} string 当前页面
   */ 
  off: (name, page)=>{
    event[name] = (event[name] || []).filter(e => e.page !== page);

    // 打印日志
    if (config.eventLog) {
      console.groupCollapsed(`%c  ${page} 取消监听 %c ${name}`, 'color:#e0c184; font-weight: bold', 'color:#f0a139; font-weight: bold');
      console.log(`%c 事件总线`, 'color:#ff65af; font-weight: bold', event);
      console.groupEnd();
    }
  },

  /**
   * 触发事件
   * @params {string} name 事件名
   * @params {string} page 当前页面
   * @params {any} ...args 传参
   */ 
  emit: (name, page, ...args)=>{
    const listeners = (event[name] || []).filter((e) => e.page !== page);

    listeners.forEach( listener => {
      listener.callback.apply(listener.page, args);
    });

    // 打印日志
    if (config.eventLog) {
      console.groupCollapsed(`%c  ${page} 触发事件 %c ${name}`, 'color:#e0c184; font-weight: bold', 'color:#f0a139; font-weight: bold');
      console.log(`%c 事件总线`, 'color:#ff65af; font-weight: bold', event);
      console.log(`%c 传参`, 'color:#3d91cf; font-weight: bold', args);
      listeners.filter(e => e.page != page).map( listener => {
        console.log(`%c 执行`, 'color:#2c9f67; font-weight: bold', listener);
      });
      console.groupEnd();
    }
  },
}