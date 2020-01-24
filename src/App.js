import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Title from "./components/TitleContainer/Title.js";
import Background from "./components/background/background.js";
import Text from "./components/TextContainer/Text.js";
import styled from"styled-components";

function App() {
  const [apod, apodSet] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=XIajNSDDfxRL6vGAud2dsKzc1o3ZEEzZNOBvKo5s")
      .then(response =>{
        // console.log(response.data);
        apodSet(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error)
      })
  }, [])
  console.log(apod)
  return (
 
    <div className="App">
      <Title title={apod.title} copyright={apod.copyright} date={apod.date}/>
      <Background hdurl={apod.hdurl}/>
      <Text explanation={apod.explanation}/>
        </div>
        
          );
        }
        
  
  

export default App;
//https://api.nasa.gov/planetary/apod?api_key=XIajNSDDfxRL6vGAud2dsKzc1o3ZEEzZNOBvKo5s