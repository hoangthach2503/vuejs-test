module.exports = {
    entry: {
        app: './index.js',
        'index': './scss/index.scss',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                    //How can I import two theme scss parallelly
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [path.resolve(__dirname, 'assets/scss/index.scss')]
                        }
                    }
                ]
            },
        ]
    }
}