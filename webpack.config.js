/**
 * Created by 502742374 on 2017/5/18.
 */
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry:{
        index:'./app/index.js',
        vendor:'./app/commons.js'
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            }
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:9000
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:'./src/index.html'
       })
    ]
}