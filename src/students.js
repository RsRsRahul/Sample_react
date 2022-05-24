import React,{useState} from 'react'
import "./student.css"
import Data from "./data.js"
const Students =(props) => {
    
    return(
        <tbody>
            <tr className='yes'>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.email}</td>
            </tr>
        </tbody>
    )
}
let count=0;
const App = () => {
    const [item,setitem]=useState(Data)
    const[isDarkTheme,setDark]=useState(true)
    const toDark=()=>{
        setDark(!isDarkTheme);
    }
    function satData(e){
        const result=Data.filter((res)=>{
        return res.name.toLowerCase().includes(e.toLowerCase().trim())
    })
    setitem(result)
    }
    let text=""
    // const butText = ()=>{
    //     if(isDarkTheme){setText("Dark Theme")}
    //     else{setText("Light Theme")   }
    if(isDarkTheme){text="Dark Theme"}
    else{text="Light Theme"}
  return (
    <div style={{
        backgroundColor : !isDarkTheme ? "black" : "white",
        color : !isDarkTheme?"white":"black"
    }}> Counter : {++count}
        <input type="text" placeholder='Search name' className='but' onChange={(e)=>{satData(e.target.value)} }
        style={{
            marginLeft:5,
            marginRight:5,
            borderRadius:5
        }} />
        <button onClick={toDark} style={{borderRadius:5}} className="theme">{text}</button>
        <table style={{width:"100%", textAlign:"center",
        borderColor: !isDarkTheme?"black":"white"}} id="userTable">
        <thead>
        <tr className="header" >
            <th >SNo</th>  
            <th >Name</th>
            <th>Age</th>
            <th>Email ID</th> 
        </tr>
        </thead>
        {item.map((elem,index)=>{
         return <Students key={elem.id} id={elem.id} name={elem.name} age={elem.age} email={elem.email}/>
        })}
         </table>
    </div>
    
  )
}
export default App