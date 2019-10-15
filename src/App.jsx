import React, {Component} from 'react'
import AppTitle from './AppTitle'
import { ENETUNREACH } from 'constants';


 function generateArray(n) {return Array.from({length:n} ,(val,index)=>index+1);}
 function generateRandomArray(n){return Array.from({length:n} ,(val,index)=>(Math.floor(Math.random()*25)+1));}
 //function generateSquare(arr){return Array.from(arr.length,(val,index)=>arr[index]*arr[index]);}
 function generateSquare(arr){return arr.map(function(x){return Math.pow(x,2);})};
 const arr1=[2, 56, 23, 88, 17, 4];
 const arr2=[2, 5, 8, 10];
 const data=[
    {
      "teacherName": "Jan Nowak",
      "teacherAge": 36,
      "active": true,
      "students": [
        {
          "name": "Maciej Janosz",
          "age": 12  
        },
        {
          "name": "Wojciech Kowalski",
          "age": 15
        },
        {
          "name": "Wioletta PoznaĹska",
          "age": 1000000
        }
      ]
    },
    {
      "teacherName": "Mariusz Flasinski",
      "teacherAge": 56,
      "active": true,
      "students": [
        {
          "name": "Jan Kot",
          "age": 12
        },
        {
          "name": "Jan Ziobro",
          "age": 15
        },
        {
          "name": "Adam Malysz",
          "age": 41
        }
      ]
    },
    {
      "teacherName": "Wojciech Kuzak",
      "teacherAge": 44,
      "active": false,
      "students": [
        {
          "name": "Janina Wronska",
          "age": 22
        },
        {
          "name": "John Dover",
          "age": 7
        },
        {
          "name": "Emil Petterson",
          "age": 46
        }
      ]
    }
  ];
  var original_data2d= data.map((teacher) => {return ( teacher.students.map((studentDetail) => { return (studentDetail.name)}))});

  var original_data = [];
  
  for(var i = 0; i < original_data2d.length; i++)
  {
    original_data = original_data.concat(original_data2d[i]);
  }
 
var sorted_data2d= data.map((teacher) => {return ( teacher.students.map((studentDetail) => { return (studentDetail.name)}))});

var sorted_data = [];

for(var i = 0; i < sorted_data2d.length; i++)
{
  sorted_data = sorted_data.concat(sorted_data2d[i]);
}
sorted_data.sort();

var old_data2d= data.map((teacher) => {if(teacher.active) return ( teacher.students.map((studentDetail) => { if(studentDetail.age>20)return (studentDetail.name)}))});
var old_data = [];
for(var i = 0; i < old_data2d.length; i++)
{
  old_data = old_data.concat(old_data2d[i]);
}
old_data.sort();

class Toggle1 extends Component
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
          <table>{original_data.map((student)=>
          <ul>{student}</ul>)}</table>
        )}
        
      </div>
    )
  }
}
class Toggle2 extends Component
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
        <button onClick={this.toggle}>Sorted Students Show/Hide</button>
        {this.state.on &&(
          <table>{sorted_data.map((student)=>
          <ul>{student}</ul>)}</table>
        )}
        
      </div>
    )
  }
}

class Toggle3 extends Component
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
        <button onClick={this.toggle}>Old Students Show/Hide</button>
        {this.state.on &&(
          <table>{old_data.map((student)=>
          <ul>{student}</ul>)}</table>
        )}
        
      </div>
    )
  }
}

class App extends React.Component { 
 constructor(){
   super();
   this.state={
     statenum:[]
   }
 function fun() {
return null;   
 } 
}


  render(){


  return(
   <div className="App">
    <AppTitle/>
   <h1>Minimal React zawadkaf</h1>
   <h3>task 2</h3>
    <h2>{generateArray(5).join(",")}</h2>
    <h3>task 3</h3>
    <h2>{generateRandomArray(5).join(",")}</h2>
    <h3>task 4</h3>
    <h2>{arr1.filter(function(x){return x>15}).join(",")}</h2>
    <h3>task 5</h3>
    <h2>{generateSquare(arr2).join(",")}</h2>
    <h3>task 7</h3>
    <Toggle1/>
    <Toggle2/>
    <Toggle3/>
    </div>
  
    );

} }


export default App
