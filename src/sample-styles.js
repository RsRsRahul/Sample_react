import "./sampleStyles.css"
const textStyle={
    textTransform :"uppercase"
}



const sampleStyle=()=>{
    return <div style={{color : "red"}}>
        <h1 style={textStyle}>hello world</h1>
    </div>
}
export default sampleStyle;