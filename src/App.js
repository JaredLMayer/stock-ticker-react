import React from 'react';
import './App.css';
import TickerList from './components/ticker-list'

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
        <TickerList />
      </div>
    )
  }
}

export default App;
