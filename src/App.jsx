import React, {Component} from 'react'
import AppTitle from './AppTitle'
import { ENETUNREACH } from 'constants';

function generateArray(a,b) {return Array.from({length:b-a+1} ,(val,index)=>index+a);}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: null,
                  b: null};
    this.ahandleChange = this.ahandleChange.bind(this);
    this.bhandleChange = this.bhandleChange.bind(this);
    

  }

  ahandleChange(event) {
    this.setState({a: Number(event.target.value)});
  }

  bhandleChange(event) {
    this.setState({b: Number(event.target.value)});
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
        <p>{(this.state.a>0)&&(this.state.a<this.state.b)&&(generateArray(this.state.a,this.state.b).join(","))}</p>
      </form>
    );
  }
}

export default App
