import React from 'react'
import '../App.css'
import './Person.css'

const Person = (props) => {
    return(
    <div onClick={props.onclick} className="Person">
        <p >{props.name}</p>
        <p> {props.age}</p>
        <input type="text" onChange={props.onchange} value={props.name}></input>
        {props.children}
    </div>
    
    );
}

export default Person;