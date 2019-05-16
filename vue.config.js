const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            '@': path.join(__dirname, '/src/') // 1. @の参照先の変更
          }
        }
    },
    outputDir: 'public/', // 2. 出力先
    pages: {
        index: {
            entry: 'src/main.js', // エントリーポイント
            template: 'dist/index.html', //3. index.htmlテンプレート
            filename: 'index.html' // 省略可
        }
    }
}