const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 修改 src 为 examples
    pages: {
        index: {
            entry: 'packages/index.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
        .add('/packages/')
        .end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
      config.resolve.alias
        .set('@',resolve('packages'))
    },
    configureWebpack: {
        mode: 'development',
        resolve: {
            alias: {
                '@': resolve('packages'),
            },
        },
    },  
}
