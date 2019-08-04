import React from 'react';
import './App.css';
import TickerList from './components/ticker-list'
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
        <TickerList />
      </div>
    )
  }
}

export default App;
