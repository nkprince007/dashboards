import React, { Component } from 'react';

// Import widgets being used in this component
import NumberWidgetContainer from './components/NumberWidgetContainer'
import ListWidgetContainer from './components/ListWidgetContainer'
import GraphWidgetContainer from './components/GraphWidgetContainer';

// Add in styles
import './styles/App.css';

const BASE_URL = process.env.BASE_URL || "http://localhost:3001"
console.log(process.env.NODE_ENV)

class App extends Component {
    render() {
        return (
            <div className="App">
                < GraphWidgetContainer
                    href={`${BASE_URL}/tickets/progression`}
                    heading = "Tickets Over Time"
                    colspan={2}
                    rowspan={2} />
                <ListWidgetContainer
                    href={`${BASE_URL}/stats/top`}
                    heading="Top Ticket Answerers"
                    rowspan={3} />
                <NumberWidgetContainer
                    heading="Open Ticket Total"
                    href={`${BASE_URL}/tickets/open`} />
            </div>
        );
    }
}

export default App;
