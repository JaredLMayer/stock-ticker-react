import React from 'react';
import css from './index.css';

export default function Asset(props) {
  
  let assetInfo = props.assetInfo;



  return (
    <div className="assetContainer flex-grid" onClick={() => props.onClick()}>
      <div className="tickerSymbol col">
        <h6 className="tickerListLabel">Symbol</h6>
        <h3>{assetInfo.tickerSymbol}</h3>
      </div>
      <div className="currentPrice col">
        <h6 className="tickerListLabel">Price</h6>
        <h3 className="currentVal">{assetInfo.currentPrice}</h3>
      </div>
      <div className="currentDate col">
        {/* market time is just calculating the current date above. I could not figure
        out where the endpoint was for this data */}
        <h6 className="tickerListLabel">Market Time</h6>
        <h3>{assetInfo.currentDate}</h3>
      </div>
      <div className="averagePrice col">
        <h6 className="tickerListLabel">Intraday High/Low</h6>
        {/* could not get to this part. I would break this into a separate component 
          it would calculate the position at which the "marker" would need to sit based
          on the average between the low and high prices (add and divide by 2).
        */}
        <h3>{assetInfo.lowPrice}<div className="priceSlider"></div>{assetInfo.highPrice}</h3>
      </div>
    </div>
  )
}