import React, { Component } from 'react';

class FlexRow extends Component {
    render() { 
        return <div className={this.getFlexRowClasses()}>{this.props.children}</div>;
    }

    getFlexRowClasses() {
        return 'd-flex flex-row justify-content-center mt-' + this.props.mt;
    }
}
 
export default FlexRow;