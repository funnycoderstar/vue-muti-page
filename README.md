# vue-stack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 配置多入口

config/pages.js
```js
const path = require('path');

module.exports = [
    {
        title: 'c站',
        filename: 'c.html',
        template: path.resolve(__dirname, '../src/templates/c.html'),
        inject: true,
        chunks: ['pc'],
        entry: {
            key: 'pc',
            file: path.resolve(__dirname, '../src/pages/pc/main.js'),
        },
    },
    {
        title: 'm站',
        filename: 'm.html',
        template: path.resolve(__dirname, '../src/templates/m.html'),
        inject: true,
        chunks: ['mobile'],
        entry: {
            key: 'mobile',
            file: path.resolve(__dirname, '../src/pages/mobile/main.js'),
        },
    },
];
```
修改webpack.base.conf.js
```js
...
const pages = require('../config/pages.js');

const entry = {};
pages.forEach((page) => {
    entry[page.entry.key] = page.entry.file;
});
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  ...
}
```
修改 webpack.dev.conf.js/ webpack.prod.conf.js
```js
const pages = require('../config/pages');
const htmlPlugins = pages.map(page => new HtmlWebpackPlugin(page));
({ 
    plugins: [
        new webpack.DefinePlugin({
        'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //   title:'我来自参数',
        //   filename: 'index.html',
        //   template: 'index.html',
        //   inject: true
        // }),
        ...htmlPlugins,
    ]
})
```

执行 npm run dev

```
http://localhost:7000 访问默认页面
http://localhost:7000/entry.html 访问引导页面
http://localhost:7000/c.html 访问c站
http://localhost:7000/m.html 访问m站
```