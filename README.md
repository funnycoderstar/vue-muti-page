# vue-muti-page

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
## hash模式和history模式
hash模式
#后面的不会传到后端， 不属于url的一部分， 纯客户端的一部分
history模式
history模式的的url都是路径的一部分

> vue-router的history模式为什么需要在后端配置， 所有页面都跳转到index.html ？
因为是单页应用， 所有url都必须指向index.html， 不然在服务端找不到该页面的请求， 会返回404

> 本地的采用history的两种方式
/m/about
./about


> devServer.historyApiFallback
https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback





