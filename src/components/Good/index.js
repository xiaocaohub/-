import "./index.css";
function Good (props) {
    console.log("good props")
 
    console.log(props)
    console.log("good props")
    return (
       
        <div className="good" onClick={props.addFn}>good</div>
    )
}
export default Good;