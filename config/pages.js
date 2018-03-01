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