import React from 'react';
import css from './index.css';

export default class TickerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerAssets: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }


  // not ideal to fetch data in a component like this
  // normally would create custom backend to avoid CORS issues
  // however due to lack of time, going to take this route for these purposes
  fetchData() {
    let symbolList = [
      'AAPL', 
      'TSLA', 
      'AMZN', 
      'GOOGL', 
      'AMD',
      'BABA',
      'FB',
      'GM',
      'UBER',
      'HCA',
      'DIS',
      'SBUX',
      'UNH',
      'CAT'
    ];

    symbolList.forEach(symbol => {
      fetch(`/v1/bars/day?symbols=${symbol}&limit=1`, {
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
        let date = new Date().toLocaleTimeString();
        let averagePrice = Math.floor(parsedJSON[symbol][0].l + parsedJSON[symbol][0].h/2)
        this.setState({tickerAssets: this.state.tickerAssets.concat({
          tickerSymbol: symbol,
          currentPrice: parsedJSON[symbol][0].c,
          highPrice: parsedJSON[symbol][0].h,
          lowPrice: parsedJSON[symbol][0].l,
          currentDate: date,
          averagePrice: averagePrice
        })})
      })
      .catch(error => { console.error('parsing failed: ', error) });
    })
  }

  render() {
    return (
      <div>
        {
          this.state.tickerAssets.map(asset => {
            return (
              <div key={asset.tickerSymbol} className="assetContainer flex-grid">
                <h3 className="tickerSymbol col">{asset.tickerSymbol}</h3>
                <h3 className="currentPrice col">{asset.currentPrice}</h3>
                <h3 className="currentDate col">{asset.currentDate}</h3>
                <h3 className="averagePrice col">{asset.averagePrice}</h3>
              </div>
            )
          })
        }
      </div>
    )
  }
}
