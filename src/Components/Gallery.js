import React from "react";
import '../App.css';
function Gallery(props){
    return (
        <div className="Gallery">
            <img src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery;