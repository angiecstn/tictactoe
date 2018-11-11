import React, { Component } from 'react';

class Square extends Component {
    state = {};
    render() {
        return (
            <button className="square" onClick={() => { alert('click'); }}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;
