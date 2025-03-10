import React from "react";
import '../App.css'; 


function ButtonBar(props){
    return (
        <div className="Button-Bar">
            <button value={-5} onClick={props.handleIterate}>Way Back</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={5} onClick={props.handleIterate}>Big Next</button>
        </div>
    )
}

export default ButtonBar;