import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      
    }

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://paper-api.alpaca.markets/v2/assets/AAPL', {
      method: "GET",
      headers: {
        "APCA-API-KEY-ID": process.env.REACT_APP_APCA_API_KEY_ID,
        "APCA-API-SECRET-KEY": process.env.REACT_APP_APCA_API_SECRET_KEY
      }
    })
    .then(response => {
      return response.json();
    })
    .then(parsedJSON => {
      console.log('parsedJSON: ', parsedJSON);
    })
    .catch(error => { console.error('parsing failed: ', error) });
  }

  render() {
    return (
      <div>
        <div className="loader">
          <div className="icon"></div>
        </div>       
      </div>
    )
  }
}

export default App;
