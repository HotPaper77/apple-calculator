import './App.css';
import React, {useState} from "react"



function App() {
  const [currentValue,setcurrentValue] =  useState(0);
  const list_buttons = ["AC","+/-","%","÷",7,8,9,"x",4,5,6,"-",1,2,3,"+",0,".","="]

  const handler_click = (event)=> setcurrentValue(currentValue + event.target.innerText)
  return (
    <div className="App">
      <Screen className="Screen" value={currentValue}></Screen>
        <ButtonArea list ={list_buttons} button = "calc_button" onClick={handler_click}></ButtonArea>
     
    </div>
  );
}


const ButtonArea = (props)=>{
  
  return props.list.map((text) =>  (
  <div onClick={props.onClick} key ={text} id={"id_" +text} className={props.button}>
  <p ><b  > {text}</b></p>
  
  </div>))
}; 

const Screen = (props) =>(
  <div className={props.className}>
    <p>{props.value}</p>
  </div>
)
 
export default App;


/* Learnings
it is critical to put keys that will not change to help react 
to track items that actually change

React Component naming is important !!!

In arrow functions parenthesis are a shorthand for the return statement

Classnames are passed down as props

setState is a wrapper arround the real value

Use state con be anything
*/ 
