// // export default function App(){
// //     const el = document.createElement("h1");
// //     el.textContent = "Hello, World!";
// //     return el;
// //   }
// import React, {useState} from "react";
// const App = () => {
//   // const [counter, setCounter] = useState(0)
//   // const increaseCounter = ()=>{

//   //   // setCounter(counter+1)
//   //   setCounter = (prevState => prevState +1)
//   // }
//   // const decreaseCounter = ()=>{

//   //   // setCounter(counter+1)
//   //   setCounter = (prevState => prevState -1)
//   // }

//   // const increaseSize = (e) => e.target.style.fontSize = "2px"
//   const [inputText, setInputText] = useState('')
//   const [submitValue, setSubmitValue] = useState('')
//   const handleInput = (e)=>{

//     setInputText(e.target.value)
//   }
// const handleSubmit = (e)=>{
//   e.preventDefault()
//   setSubmitValue(inputText)
// }
//   return (

//     // <>
//     //   {/* <h1 onMouseEnter = {increaseSize}>Counter: {counter} </h1> */}
//     //   <h1>Counter: {counter} </h1>
//     //   <button onClick={increaseCounter}>Increase</button>
//     //   <button onClick={decreaseCounter}>Decrease</button>
//     // </>


//     <>
//     <header>Lamaarr's ToDo list: {submitValue}</header>
//     <form onSubmit = {handleSubmit}>
//       <input type = "text" onChange = {handleInput}></input>
//       <input type = "submit" value = "Add"></input>
//     </form>
//     </>

//   )

// }

// export default App
import React from "react";
import Artist from "./Artist"
import Album from "./Albums"

const artists = [{name:"Adele", type: "Pop", intro: ''}, {name:"Justin Bieber", type: "Pop", intro: ''}]


const albums = [{name: "30", date: 2021, cover:''},{name: "Justice", date: 2021, cover:''} ]



const App = () => {
  return(
<>

<ul>
  {artists.map((e, i) => (
      <>
      <Artist artist={e} key={i} />
      <Album album = {albums[i]} key={i+10}/>
      
      </>
  ))}

</ul>    
     </>


)}
export default App
