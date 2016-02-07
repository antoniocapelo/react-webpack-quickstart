import React from 'react';
require('./es2015.less');

export default class Es2015Component extends React.Component {
    render() {
        console.log('\"Es2015\" component is rendering"');
        return (
            <div className="es2015-module">
                <p>If this is <b>blurry</b>, then auto-prefixer should be working well :)</p>
                <div className="outer">
                    <div className="inner">
                    </div>
                    <button onClick={this.fn}>Click to log!</button>
                </div>
            </div>
        );
    }
    fn(el) {
        console.log('clicked React Component (ES2015 version) Button');
    }
}

