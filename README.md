# 第三方库使用
## NPM包地址
## 安装
npm install @ry/scalebox-react
## 使用场景
在React项目中，当你需要开发大屏，希望宽高保持固定比例自适应视口或者其他容器展示时。
## 使用方式

```jsx
import ScaleBox from '@ry/scalebox-react'

<ScaleBox width={1908} height={1000}>
    <div>这里是具体的被放缩的子组件，应用时替换即可，传参时要传isFullScreen或者container，属性说明与传参类型见下方API详细说明</div>
</ScaleBox>
```
## API

|     属性     |                          说明                            | 类型        | 默认值 |
|    -------   | ------------------------------------------------------- | ------------| ------|
|    width     | 大屏初始宽                                               |   number    |   -   |
|   height     | 大屏初始高                                               |   number    |   -   |
| isFullScreen | 是否自适应视口宽高（window.innerWidth/window.innerHeight）|   boolean   |   -   |
|   container  | 是否自适应该DOM元素宽高                                   | HTMLElement |   -   |

# 本地调试
## 本地启动
npm run start

## 修改代码后测试
npm run test

# 本地打包
npm run build