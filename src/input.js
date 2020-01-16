import React, { Component } from 'react';

class input extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <input type="text"></input>
                <button>Push</button>
            </div>
        );
    }
}

export default input;