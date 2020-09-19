const cracoLessPlugin = require('craco-less');
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
module.exports = {
    webpack: {
        alias: {
            '@': pathResolve('src'),
            '@utils': pathResolve('src/utils')
        }
    },
    plugins: [
        {
            plugin: cracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};