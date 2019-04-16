import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorDisplay from './ErrorDisplay';

class App extends React.Component {

    state = { lat: null, errorMessage: null};

    componentDidMount () {
        console.log ("component was created just now");
        window.navigator.geolocation.getCurrentPosition (
            position => this.setState ({ lat: position.coords.latitude}),
            err => this.setState ({ errorMessage: err.message})
        );
    }

    render () {

        if (this.state.errorMessage && !this.state.lat) {
            return <ErrorDisplay errorMessage={this.state.errorMessage} />;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <Spinner message="Waiting for user's input..."/>;
    }
}

ReactDOM.render (<App />, document.querySelector('#root'));
