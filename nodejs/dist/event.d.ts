/**
 * 监听
 * @params {string} name 事件名
 * @params {string} id 监听标记，用于防重复监听
 * @params {function} callback 触发时的回调
 */
declare const on: (name: string, id: string, callback: any) => void;
/**
 * 取消监听
 * @params {string} name 事件名
 * @params {string} id 监听标记
 */
declare const off: (name: string, id: string) => void;
/**
 * 触发事件
 * @params {string} name 事件名
 * @params {any} ...args 传参
 */
declare const emit: (name: string, ...args: any[]) => void;
export { on, off, emit, };
