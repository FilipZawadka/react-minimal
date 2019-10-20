import React, {Component} from 'react'
import AppTitle from './AppTitle'
import { ENETUNREACH } from 'constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: null,
                  b: null};
    this.ahandleChange = this.ahandleChange.bind(this);
    this.bhandleChange = this.bhandleChange.bind(this);
    

  }

  ahandleChange(event) {
    this.setState({a: event.target.value});
  }

  bhandleChange(event) {
    this.setState({b: event.target.value});
  }


  render() {
    return (
      <form >
        <p>
          Input a i b:
          <input type="number" onChange={this.ahandleChange}/>
          <input type="number" onChange={this.bhandleChange}/>
          
        </p>
        <p>Number a: {this.state.a}</p>
        <p>Number b: {this.state.b}</p>
      </form>
    );
  }
}

export default App
