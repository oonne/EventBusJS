interface Event {
  id: string;
  callback: any;
}
interface EventList {
  [propName: string]: Event[];
}

const eventList: EventList = {};

/**
 * 监听
 * @params {string} name 事件名
 * @params {string} id 监听标记，用于防重复监听
 * @params {function} callback 触发时的回调
 */ 
const on = (name: string, id: string, callback) => {
  eventList[name] = eventList[name] || [];

  const oldEvent = eventList[name].find(e => e.id === id);

  if (oldEvent) {
    oldEvent.id = id;
    oldEvent.callback = callback;
  } else {
    eventList[name].push({
      id,
      callback,
    });
  }
};

/**
 * 取消监听
 * @params {string} name 事件名
 * @params {string} id 监听标记
 */ 
const off = (name: string, id: string) => {
  eventList[name] = (eventList[name] || []).filter(e => e.id !== id);
};

/**
 * 触发事件
 * @params {string} name 事件名
 * @params {any} ...args 传参
 */ 
const emit = (name: string, ...args) => {
  const listeners = eventList[name] || [];

  listeners.forEach( listener => {
    listener.callback.apply(listener.id, args);
  });
};

export {
  on,
  off,
  emit,
};