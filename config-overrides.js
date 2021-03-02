const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addLessLoader
} = require('customize-cra');
const path = require('path')
module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@pages': path.resolve(__dirname, './src/path')
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@border-radius-base': '4px'
        }, 
    }),
);