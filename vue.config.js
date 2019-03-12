const pages = {
    pc: {
        entry: 'src/main.js',
        template: 'public/pc.html',
        filename: 'pc.html',
        // title: 'Index Page',
        // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    m: {
        entry: 'src/main_m.js',
        template: 'public/m.html',
        filename: 'm.html',
        // title: 'Index Page',
        // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
 
}
if(process.env.NODE_ENV !== 'production') {
    pages.index  = {
        entry: 'src/main.js',
        template: 'src/entry.html',
        filename: 'index.html',
    }
}
module.exports = {
    devServer: {
        port: '3100'
    },
    pages: pages,
}