const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',// 入口
    output: {
        filename: 'main.js', // 打包生成包的名称
        path: path.resolve(__dirname, 'dist') //指定打包到的目录
    },
    plugins: [
        new CleanWebpackPlugin(),// 清理/dist文件夹,官方给的['dist']入参会报错，这里去掉
        new HtmlWebpackPlugin({
            title: 'CreateJS-Npm',// 配置模板标题
            template: './src/index.html' //配置html模板路径
        })
    ],
    devServer: {
        contentBase: './dist' //指定本地开发服务的根目录
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-withimg-loader'] // 用于打包模板html中的img
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
                    loader: 'file-loader', // 用于打包静态资源
                    options: {
                        name: '[name].[ext]', // 动态名称
                        outputPath: 'img/', // 默认情况下，它会输出到webpack配置的output路径下
                        publicPath: 'img/', 
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
                    loader: 'babel-loader', // 用于编译es6代码
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