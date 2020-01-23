import React from "react";
const TextContainer = props => {
    return(
        <div className = "TextContainer" keys = {props.date}>
            <p>{props.explanation}</p>
        </div>
    )
}
export default TextContainer