import React from 'react';
require('./es2015.less');

export default class Es2015Component extends React.Component {
    render() {
        console.log('\"Es2015\" component is rendering"');
        return (
            <div className="outer">
                <div className="inner">
                </div>
                <button onClick={this.fn}>log!</button>
            </div>
        );
    }
    fn(el) {
        console.log('clicked React Component (ES2015 version) Button');
    }
}

