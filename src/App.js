import React from 'react';
import './App.css';
import TickerList from './components/ticker-list'
import Filter from './components/filter'
import Header from './components/header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      
    }

  }

  render() {
    return (
      <div>
        <Header />
        <Filter />
        <TickerList />
      </div>
    )
  }
}

export default App;
