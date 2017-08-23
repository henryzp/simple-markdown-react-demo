const path = require('path');

module.exports = {
    port: 8001,
    source: [
        './cssModule'
    ],
    lazyLoad(nodePath, nodeValue) {
        if (typeof nodeValue === 'string') {
            return true;
        }
        return nodePath.endsWith('/demo');
    },
    pick: {
        cssModule(markdownData) {
            const filename = markdownData.meta.filename;
            if (!/^cssModule/.test(filename) ||
                /\/demo$/.test(path.dirname(filename)) ) return;

            return {
                meta: markdownData.meta
            };
        }
    },
    theme: './site/theme',
    htmlTemplate: './site/theme/static/template.html',
    plugins: [
        'bisheng-plugin-description',
        'bisheng-plugin-toc?maxDepth=2&keepElem',
        'bisheng-plugin-react?lang=__react',
        'bisheng-plugin-antd'
    ],
    doraConfig: {
        verbose: true,
        plugins: ['dora-plugin-upload']
    },
    webpackConfig(config) {
        config.resolve.alias = {
            'react-router': 'react-router/umd/ReactRouter',
        };
        config.babel.plugins.push([
            require.resolve('babel-plugin-antd'),
            {
                style: true
            },
        ]);
        return config;
    }
};
