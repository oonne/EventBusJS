"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emit = exports.off = exports.on = void 0;
const eventList = {};
/**
 * 监听
 * @params {string} name 事件名
 * @params {string} id 监听标记，用于防重复监听
 * @params {function} callback 触发时的回调
 */
const on = (name, id, callback) => {
    eventList[name] = eventList[name] || [];
    const oldEvent = eventList[name].find(e => e.id === id);
    if (oldEvent) {
        oldEvent.id = id;
        oldEvent.callback = callback;
    }
    else {
        eventList[name].push({
            id,
            callback,
        });
    }
};
exports.on = on;
/**
 * 取消监听
 * @params {string} name 事件名
 * @params {string} id 监听标记
 */
const off = (name, id) => {
    eventList[name] = (eventList[name] || []).filter(e => e.id !== id);
};
exports.off = off;
/**
 * 触发事件
 * @params {string} name 事件名
 * @params {any} ...args 传参
 */
const emit = (name, ...args) => {
    const listeners = eventList[name] || [];
    listeners.forEach(listener => {
        listener.callback.apply(listener.id, args);
    });
};
exports.emit = emit;
