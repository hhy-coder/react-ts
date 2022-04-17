import { useEffect, useState } from "react";

//当value为0的时候 是我们想要的结果 不要排除
export const isFalsy = value => (value === 0 ? false : !value);
//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = object => {
  const result = { ...object };
  Object.keys(result).forEach(key => {
    //用result代替object 不修改原对象
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = callback => {
  useEffect(() => {
    callback();
  }, []);
};

//节流  防止发送太多次网络请求
// const debounce = (func,delay)=>{
// let timeout;
// return (...param)=>{
//   if(timeout){
//     clearTimeout(timeout)
//   }
//   timeout = setTimeout(function(){
//     func(...param)
//   },delay)
// }
// }

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    //每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //每次在上一个useEffect处理完以后再运行   最后一个不会被清理
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
