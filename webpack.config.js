// Webpack cmds
// webpack for building once for development
// webpack -p for building once for production (minification)
// webpack --watch for continuous incremental build in development (fast!)
// webpack -d to include source maps

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        sourceMapFilename: '[file].map',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public',
        historyApiFallback: true,
        hot: true,
        inline: true,
        quiet: false,
        // It suppress everything except error, so it has to be set to false as well
        // to see success build.
        noInfo: false,
        stats: {
            // Config for minimal console.log mess.
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                loader: 'babel-loader' 
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader")
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    postcss: function () { return [autoprefixer]; },
    eslint: {
        configFile: '.eslintrc',
        emitError: true,
        failOnError: true
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};