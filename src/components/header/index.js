import React from 'react';
import css from './index.css';
import Input from 'react-toolbox/lib/input';

export default class Header extends React.Component {
  render() {
    return ( 
      <div className="columns">
        <div className="headerContainer row">
          <h1 className="col-3 tickerHeader">TICKERS</h1>
          <Input
            className="searchBar"
            type="text"
          />
        </div>
      </div>
    )
  }
}
