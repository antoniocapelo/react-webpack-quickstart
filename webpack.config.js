// Webpack cmds
// webpack for building once for development
// webpack -p for building once for production (minification)
// webpack --watch for continuous incremental build in development (fast!)
// webpack -d to include source maps

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};