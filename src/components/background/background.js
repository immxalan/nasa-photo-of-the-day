import React from "react";
import styled from"styled-components";
const BackgroundImage = styled.div`
height: 2000px;
width: 2000px;
margin: 0;
padding: 0;
background-image: url(${props => props.img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
}
`
const background = props => {
    return(
            <BackgroundImage img = {props.hdurl}>
            </BackgroundImage>
            
    )
}
 export default background;