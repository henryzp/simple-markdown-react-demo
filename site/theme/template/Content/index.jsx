import React from 'react';
import MainContent from './MainContent';


export function collect(nextProps, callback) {

    const pageData = nextProps.pageData;
    const pageDataPromise = typeof pageData === 'function' ?
        pageData() : (pageData.index)();

    const promises = [pageDataPromise];

    const pathname = nextProps.location.pathname;
    const demos = nextProps.utils.get(
        nextProps.data, [...pathname.split('/'), 'demo']
    );
    if (demos) {
        promises.push(demos());
    }

    Promise.all(promises)
        .then((list) => callback(null, {
            ...nextProps,
            localizedPageData: list[0],
            demos: list[1],
        }));
}

export default (props) => {
    console.dir(props);
    return <MainContent {...props} />;
};
