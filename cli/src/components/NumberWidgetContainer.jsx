import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import request module
import axios from 'axios';

// Import components
import NumberWidget from '../components/NumberWidget';

class NumberWidgetContainer extends Component {
    constructor() {
        super();

        // Set initial state
        this.state = {
            loading: false,
            min: undefined,
            max: undefined,
            value: undefined
        }


        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        this.getData().then(_ => {
            this.interval =
                setInterval(this.getData, 5000);
        });
    }

    // Fetch new data
    getData() {
        // Tell the Widget component we're currently loading
        this.setState({ loading: true });

        // Fetch data
        return axios.get(this.props.href)
            .then(resp => {
                this.setState({
                    loading: false,
                    min: resp.data.min,
                    max: resp.data.max,
                    value: resp.data.value
                });
            })
    }

    render() {
        return (
            // Render the number widget
            <NumberWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} min={this.state.min} max={this.state.max} value={this.state.value} loading={this.state.loading} />
        );
    }
}

// Enforce the type of props to send to this component
NumberWidgetContainer.propTypes = {
    heading: PropTypes.string,
    colspan: PropTypes.number,
    rowspan: PropTypes.number,
    href: PropTypes.string.isRequired
}

export default NumberWidgetContainer;
