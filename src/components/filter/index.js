import React from 'react';
import css from './index.css';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOption: ''
    }
  }

  handleFilterChange(e) {
    let values = {};
    Object.values(document.getElementsByClassName('assetContainer')).forEach(element => {
      console.log(parseInt(element.children[1].getElementsByClassName('currentVal')[0].outerText));
      values[parseInt(element.children[1].getElementsByClassName('currentVal')[0].outerText)] = element;
      // values.push(parseInt(element.children[1].getElementsByClassName('currentVal')[0].outerText));
    });
    let sortedValues = Object.keys(values).sort((a, b) => a - b);
    console.log(sortedValues)
    let newDom = [];
    sortedValues.forEach(currPrice => newDom.push(values[currPrice]));
    document.getElementsByClassName('assetsWrapper').innerHTML = newDom;
    
    this.setState({filterOption: e.target.value}, () => {
      
    });
  }

  render() {
    return (
      <div className="filter-container">
        <h1>Trending</h1>
        <h4 className="filter-label">Filter</h4>
        <select className="filter-dropdown" value={this.state.filterOption} onChange={((e) => this.handleFilterChange(e))}>
          <option>Gainers</option>
          <option>Losers</option>
        </select>
      </div>
    )
  }
}
