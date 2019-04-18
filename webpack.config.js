const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'CreateJS-Npm',
            template: './src/index.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-withimg-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/', // 默认情况下，它会输出到webpack配置的output路径下
                        publicPath: 'img/', // outputPath is for copying，publicPath keeping the correct reference in the places where we use this.
                    }
                }
            },
            {
                test: /\.mp3$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'audio/', 
                        publicPath: 'audio/', 
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除掉node_module目录
                use: {
                    loader: 'babel-loader', // 编译es6代码
                    options: {
                        // cacheDirectory:true,
                        presets: ['env'],//转码规则
                        plugins: ['transform-runtime'] //解决代码重复问题
                    }
                }
            }
        ]
    }
};