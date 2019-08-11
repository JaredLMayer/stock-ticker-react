import React from 'react';
import css from './index.css'; // eslint-disable-line

export default function AssetDetails(props) {
  
  let assetDetails = props.assetDetails;

  return (
    <div className="assetDetailsContainer">
      <div className="symbolContainer">
        <h1>{assetDetails[0].tickerSymbol}</h1>
      </div>
      <div className="flex-grid">
        <div className="currentPrice col">
          <h3 className="currentVal">{assetDetails[0].currentPrice}</h3>
          <h6 className="tickerListLabel">Price</h6>
        </div>
        <div className="currentDate col">
          <h3>{assetDetails[0].currentDate}</h3>
          <h6 className="tickerListLabel">Market Time</h6>
        </div>
        <div className="averagePrice col">
          <h3>{assetDetails[0].lowPrice}<div className="priceSlider"></div>{assetDetails[0].highPrice}</h3>
          <h6 className="tickerListLabel">Intraday High/Low</h6>
      </div>
      </div>
    </div>
  )
}