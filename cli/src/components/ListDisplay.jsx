import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styling
import '../styles/ListDisplay.css';

class ListDisplay extends Component {
    render() {
        return (
            // Render a wrapper around the children that are passed
            <ul className="ListDisplay">
                {this.props.children}
            </ul>
        )
    }
}

// Enforce the type of props to send to this component
ListDisplay.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default ListDisplay;
