const path = require('path');
var webpack = require('webpack');

let config = {
    // 入口文件
    entry: path.resolve(__dirname, 'src/index.jsx'),
    // 出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'] //webpack2.x extensions[0]不能为空
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        disableHostCheck: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()  //没有用
    ],
    module: {
        rules:[{
            test: /\.(jsx|js)$/,
            include: /src/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["react", "env"]
                }
            }]
        }]
    }
}
config.output.publicPath = 'dist';
config.devtool = 'cheap-module-eval-source-map';
module.exports = config;