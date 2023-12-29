/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
// --------setupFiles----setupFilesAfterEnv
// ------------|执行时机-----|执行时机
// 准备i测试环境->引入测试框架->执行测试文件
module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['./test/setupTests.js'],
  testEnvironment: "jsdom",//用于帮助我们在Node环境下实现Web标准API，这样不用我们自己去Mock，就跟ResizeObserver一样
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
    //   'jest-transform-css',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/'],
};
