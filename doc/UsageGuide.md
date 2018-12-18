## 安装：
```
npm install @babel/core @babel/cli -D
```
## 执行babel的三种方式：
* 控制台 ./node_modules/.bin/babel
* script 
* npx

## Polyfill (@babel/polyfill)
* 包含 core-js  和 regenerator runtime  两个模块
* 支持使用内置函数 静态方法 实例方法 以及 generator
* 会带来全局污染
* 如果不希望全局污染，且不需要实例方法的话，可以采取 transform runtime；
* useBuiltIns： useage 自动按需引入目标环境不支持的功能
