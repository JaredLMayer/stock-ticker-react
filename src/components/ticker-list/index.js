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
  // I have added a proxy to the package.json to avoid CORS issues
  // Normally, this list would be put in a config file using config module
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

    // I truly did not want to call the api for each symbol, however I was having a ton
    // of trouble finding the endpoint where I could send in multiple symbols in 1 call :(
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
        this.setState({tickerAssets: this.state.tickerAssets.concat({
          tickerSymbol: symbol,
          currentPrice: parsedJSON[symbol][0].c,
          highPrice: parsedJSON[symbol][0].h,
          lowPrice: parsedJSON[symbol][0].l,
          currentDate: date
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
                <div className="tickerSymbol col">
                  <h6 className="tickerListLabel">Symbol</h6>
                  <h3>{asset.tickerSymbol}</h3>
                </div>
                <div className="currentPrice col">
                  <h6 className="tickerListLabel">Price</h6>
                  <h3 className="currentVal">{asset.currentPrice}</h3>
                </div>
                <div className="currentDate col">
                  {/* market time is just calculating the current date above. I could not figure
                  out where the endpoint was for this data */}
                  <h6 className="tickerListLabel">Market Time</h6>
                  <h3>{asset.currentDate}</h3>
                </div>
                <div className="averagePrice col">
                  <h6 className="tickerListLabel">Intraday High/Low</h6>
                  {/* could not get to this part. I would break this into a separate component 
                    it would calculate the position at which the "marker" would need to sit based
                    on the average between the low and high prices (add and divide by 2).
                  */}
                  <h3>{asset.lowPrice}<div className="priceSlider"></div>{asset.highPrice}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
