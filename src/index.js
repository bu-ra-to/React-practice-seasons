import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spiner from './Spiner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, err: '' };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => {
        this.setState({ err: err.message });
      }
    );
  }
  renderContent() {
    const { lat, err } = this.state;
    if (err && !lat) {
      return <div>Error: {err}</div>;
    }
    if (!err && lat) {
      return <SeasonDisplay lat={lat} />;
    }
    return <Spiner />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
