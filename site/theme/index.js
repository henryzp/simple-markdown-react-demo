const contentTmpl = './template/Content/index';

module.exports = {
    routes: {
        path: '/',
        component: './template/Layout/index',
        indexRoute: { component: './template/Home/index' },
        childRoutes: [{
            path: 'cssModule/:children/',
            component: contentTmpl
        }]
    },
};
