import React from 'react';

export default class Es2015Component extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.fn}>ES2015 BUTTON</button>
            </div>
        );
    }
    fn(el) {
        console.log('clicked ' + el.target.textContent);
    }
}

