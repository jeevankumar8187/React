// import React, {Component} from 'react';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


const App = (props) =>{

  const [personState , setPersonState] = useState({
    persons :[
      {name :'jeevan' , age : '23'},
      {name :'akshitha', age:'24'},
      {name :'sindhu', age:'23'}
    ],
    employee : "second element"
  })

  const onClickHandler = () =>{
    console.log("clicked");
    let changedName = personState.persons[0].name === "jeevan" ? "jeevan kumar" : "jeevan";
    console.log(changedName);
    setPersonState({...personState , 
      persons :[
        {name : changedName, age : '23'},
        {name :'akshitha', age:'24'},
        {name :'sindhu', age:'23'}
      ]
    }
    );
  }

  return(
    <div>
    <h1  className="App ">Hello people</h1>
    {console.log(personState)}
    <Person name={personState.persons[0].name} age={personState.persons[0].age} 
            onclick={onClickHandler}>
            </Person>
    <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
    <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  )
}


// class App extends Component {

// state = {
//   persons :[
//     {name :'jeevan' , age : '23'},
//     {name :'akshitha', age:'24'},
//     {name :'sindhu', age:'23'}
//   ]
// }

//   onClickHandler = () =>{
//     console.log("clicked");
//     let changedName = this.state.persons[0].name === "jeevan" ? "jeevan kumar" : "jeevan";
//     console.log(changedName);
//     this.setState({
//       persons :[
//         {name : changedName, age : '23'},
//         {name :'akshitha', age:'24'},
//         {name :'sindhu', age:'23'}
//       ]
//     }
//     );
//   }

//   onChangeHandler = (event) => {
//     console.log("changed");
//     this.setState({
//       persons :[
//           {name : event.target.value, age : '23'},
//           {name :'akshitha', age:'24'},
//           {name :'sindhu', age:'23'}
//       ]
//     }

//     )
//   }

//   render() {
//     console.log(this.state)
//     return (
//     <div>
//     <h1  className="App ">Hello people</h1>
//     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
//             onclick={this.onClickHandler}
//             onchange={this.onChangeHandler}>
//             </Person>
//     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
//     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
//     </div>
//     );
//   }
// }

export default App;
