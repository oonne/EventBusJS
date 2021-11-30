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
  },

  /**
   * 取消监听
   * @params {string} name 事件名
   * @params {string} string 当前页面
   */ 
  off: (name, page)=>{
    event[name] = (event[name] || []).filter(e => e.page !== page);
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
  },
}