import React, {Component} from 'react'
import AppTitle from './AppTitle'
import { ENETUNREACH } from 'constants';

function generateArray(a,b) {return Array.from({length:b-a+1} ,(val,index)=>index+a);}
function generateSquare(arr){return arr.map(function(x){return Math.pow(x,2);})};
var arr=[];
let rendnum=0;
class Toggle extends Component
{
  state={
    on:false,
  }
  toggle= ()=>{
    this.setState({
      on:!this.state.on
    })
  }
  render(){
    return(
      <div>
        <button onClick={this.toggle}>All Students Show/Hide</button>
        {this.state.on &&(
          generateSquare(arr).join(",")
        )}

      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: null,
                  b: null,
                click: []};
    this.ahandleChange = this.ahandleChange.bind(this);
    this.bhandleChange = this.bhandleChange.bind(this);
    this.ClickHandle = this.ClickHandle.bind(this);

  }

  ahandleChange(event) {
    this.setState({a: Number(event.target.value)});
  }

  bhandleChange(event) {
    this.setState({b: Number(event.target.value)});
  }
  ClickHandle(){
    this.setState({click:generateSquare(arr)});
  }
  
  render() {
    rendnum++;
    return (
      
      <form > 
       <p> {console.time("render - "+rendnum.toString()+" - ")}</p>
        <p>
          Input a i b:
          <input type="number" onChange={this.ahandleChange}/>
          <input type="number" onChange={this.bhandleChange}/>
          
        </p>
        <p>Number a: {this.state.a}</p>
        <p>Number b: {this.state.b}</p>
        <p>{(this.state.a>0)&&(this.state.a<this.state.b)&&((arr=generateArray(this.state.a,this.state.b)).join(","))}</p>

       <p>
        <button type="button" onClick={this.ClickHandle}>Process array</button>
        <p>{
          this.state.click.join(",")
        }</p>
        </p>

        <p>{console.timeEnd("render - "+rendnum.toString()+" - ")}</p>

         </form>
    );
  }
  
}

export default App
