import React, { Component } from 'react';

class Distrito extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>{this.props.distrito}</h2>
            </>
        )
    }
}

export default Distrito;