const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyPlugin(
                [
                    {
                        from: 'node_modules/@eversdk/lib-web/eversdk.wasm',
                        to: './'
                    }
                ],
            )
        ]
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}