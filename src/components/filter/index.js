import React from 'react';
import css from './index.css'; // eslint-disable-line

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOption: ''
    }
  }

  handleFilterChange(e) {

    return this.setState({filterOption: e.target.value}, () => {
      
      let values = [];
      
      if (this.state.filterOption === "Gainers") {
        values = this.props.assets.sort((a, b) => {
          return b.currentPrice - a.currentPrice;
        });
      } else if (this.state.filterOption === "Losers") {
        values = this.props.assets.sort((a, b) => {
          return a.currentPrice - b.currentPrice;
        });
      }
      return this.props.handleFiltering(values);
    })

  }

  render() {
    return (
      <div>
        <div className="filter-container">
          <h1 className="statusHeader">Trending</h1>
          <h4 className="filter-label">Filters</h4>
          <select className="filter-dropdown" value={this.state.filterOption} onChange={((e) => this.handleFilterChange(e))}>
            <option disabled defaultValue> -- filter by price -- </option>
            <option>Gainers</option>
            <option>Losers</option>
          </select>
        </div>
      </div>
    )
  }
}
