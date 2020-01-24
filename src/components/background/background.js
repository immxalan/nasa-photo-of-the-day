import React from "react";
import styled from"styled-components";

const BackgroundImage = styled.div`
height: 1600px;
width: 1600px;
margin: 0;
padding: 0;
background-image: url(${props => props.img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
position: relative;
`
const TitleContainer = styled.div`
`
const TextContainer=styled.div`
display: flex;
position:absolute; 
bottom:0;
`
const Text = styled.p`

`
const background = props => {
    return(
        <BackgroundImage img = {props.hdurl}>
           <TitleContainer>
                <h2>Photo Title: {props.title}</h2>
                <h3>Copyright: {props.copyright}</h3>
                <h3>Date: {props.date}</h3>
                <h4>Dedicated to Shana Pili, super space nerd and the inspiration for my hard work.</h4>
            </TitleContainer>
            <TextContainer className = "TextContainer">
                <Text>{props.explanation}</Text>
            </TextContainer>
        </BackgroundImage>    
    )
}
 export default background;