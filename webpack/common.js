const webpack = require('webpack')

module.exports = {
    entry: {
        main: [
            './src/client/index.js',
        ]
    },
    output: {
        filename: '[name].js',
        publicPath: '/bundle/'
    },
    // Remove resolve in case you want to use react
    resolve: {
        extensions: ['.js'],
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource)
        })
    ]
}