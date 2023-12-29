import React from 'react'
import { render, screen } from '@testing-library/react';
import ScaleBox from '../src/index.js';

// 延时器函数不会被正常执行因此通过jest加速器加速执行才能正常测试
// 由于异步set数据，jest报错了，可在测试时将debunce函数先注释掉不做节流处理或者在js文件里changeScale里把set方法用act包起来
test('以window的方式执行是否正常展示并放缩', async() => {
  jest.useFakeTimers();//开启模拟定时器，后边要加速，这里必须要用。
  // 模拟视口缩小
  render(<ScaleBox width={1908} height={1000} isFullScreen={true}>
    <div style={{ width: 1908, height: 1000 }}>Hello World!</div>
  </ScaleBox>)
  jest.runAllTimers();//加速所有定时器
  screen.debug();
  const isShow = screen.getByText('Hello World!');
  expect(isShow).toBeInTheDocument(); //toBeInTheDocument该方法来自于@testing-library/jest-dom对jest所做的扩展。
});

// jest的test环境依赖于jsDOM，该库没有实现ResizeObserverAPI因此不能够测试相关逻辑。
test('以container的方式执行是否正常展示', () => {
  const oDiv = document.createElement('div');
  render(<ScaleBox width={1908} height={1000} container={oDiv}>
    <div style={{ width: 1908, height: 1000 }}>Hello World!</div>
  </ScaleBox>, { container: document.body.appendChild(oDiv) });
  screen.debug();
  const isShow = screen.getByText('Hello World!');
  expect(isShow).toBeInTheDocument();
});

