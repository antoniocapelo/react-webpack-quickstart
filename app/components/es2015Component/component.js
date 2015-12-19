import React from 'react';

export default class Es2015Component extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.fn}>Click me</button>
            </div>
        );
    }
    fn(el) {
        console.log('clicked React Component (ES2015 version) Button');
    }
}

