var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor'   : './src/vendor.ts',
        'app'      : './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    node: {
        // console: 'empty',
        // fs: 'empty',
        net: 'empty',
        // tls: 'empty',
    },

    module: {
        rules: [
            {
                test   : /\.ts$/,
                enforce: 'pre',
                loader : 'tslint-loader'
            },
            {
                test   : /\.ts$/,
                loaders: [
                    'ng-router-loader',
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test  : /\.html$/,
                loader: 'html-loader'
            },
            {
                test  : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test   : /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader : ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader        : 'css-loader?importLoaders=1!postcss-loader'
                })
            },
            {
                test   : /\.css$/,
                include: helpers.root('src', 'app'),
                loader : ['raw-loader', 'postcss-loader']
            },
            // {
            //     subscription-management: /\.scss$/,
            //     loaders: ["style-loader", "css-loader", "sass-loader"]
            // }
            {
                test   : /\.scss$/,
                loaders: ['raw-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new CopyWebpackPlugin([
            {
                from: 'src/public',
                to  : 'public'
            }
        ])
    ]
};