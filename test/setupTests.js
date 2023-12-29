// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// MOCK部分，JSDOM没有实现该全局变量。该文件会在引入测试框架jest后执行（在每一个测试文件执行前都会执行一次）
window.ResizeObserver = jest.fn().mockImplementation(() => {  
    return {  
      observe: jest.fn(),  
      unobserve: jest.fn(),  
    };  
})