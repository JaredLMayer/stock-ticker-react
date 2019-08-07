import React from 'react';

export default function AssetDetails(props) {
  
  let assetDetails = props.assetDetails;

  return (
    <div>
      <h1>{assetDetails[0].tickerSymbol}</h1>
      <h1>{assetDetails[0].currentPrice}</h1>
      <h1>{assetDetails[0].currentDate}</h1>
      <h1>{assetDetails[0].lowPrice}</h1>
      <h1>{assetDetails[0].highPrice}</h1>
    </div>
  )
}




