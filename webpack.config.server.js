const path = require('path');

module.exports = {
    entry: './server.js',
    mode: "production",
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        library: 'server',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    }
};