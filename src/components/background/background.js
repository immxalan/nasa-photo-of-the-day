import React from "react";

const background = props => {
    return(
        <div className="BackgroundImage">
            <img src = {props.url} alt="space"/>
        </div>
    )
}
 export default background;