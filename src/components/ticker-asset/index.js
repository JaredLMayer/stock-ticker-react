// import React from 'react';

export default class TickerAsset extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      asset: this.props.asset
    }
  }
  
  render() {
    return (
    <div key={this.state.asset.tickerSymbol} className="assetContainer flex-grid">
      <div className="tickerSymbol col">
        <h6 className="tickerListLabel">Symbol</h6>
        <h3>{this.state.asset.tickerSymbol}</h3>
      </div>
      <div className="currentPrice col">
        <h6 className="tickerListLabel">Price</h6>
        <h3 className="currentVal" data={this.state.asset.currentPrice}>{this.state.asset.currentPrice}</h3>
      </div>
      <div className="currentDate col">
        {/* market time is just calculating the current date above. I could not figure
        out where the endpoint was for this data */}
        <h6 className="tickerListLabel">Market Time</h6>
        <h3>{this.state.asset.currentDate}</h3>
      </div>
      <div className="averagePrice col">
        <h6 className="tickerListLabel">Intraday High/Low</h6>
        <div className="flex-grid">
          <h3 className="col">{this.state.asset.lowPrice}</h3>
          <div className="priceSlider col"></div>
          <h3 className="col">{this.state.asset.highPrice}</h3>
        </div>
      </div>
    </div>
    )
  }
}