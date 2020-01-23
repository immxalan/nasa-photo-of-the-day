import React from "react";

const Title = props => {
    return(
        <div className = "TitleContainer">
            <h2>Photo Title: {props.title}</h2>
            <h3>Copyright: {props.copyright}</h3>
            <h3>Date: {props.date}</h3>
        </div>
    )
}
export default Title();