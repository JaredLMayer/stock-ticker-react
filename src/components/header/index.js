import React from 'react';
import css from './index.css'; // eslint-disable-line
import Input from 'react-toolbox/lib/input';

export default class Header extends React.Component {
  render() {
    return ( 
      <div className="columns">
        <div className="headerContainer row">
          <h1 className="col-3 tickerHeader">TICKERS</h1>
          {/* given more time, I would break out searchBar into it's own component 
            of course there are modules out there that will come with search functionality
            howevere I would've liked to build this myself
          */}
          <Input
            className="searchBar"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    )
  }
}
