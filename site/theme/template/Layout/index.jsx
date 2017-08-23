import React, {Component} from 'react';

import Header from './Header';
import Footer from './Footer';

import '../../static/style';


export default class Layout extends React.Component {
    constructor(...props) {
        super(...props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-wrapper">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}