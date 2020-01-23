import React from "react";

// function background() {
//     const [background, setBackground]  = useState();
//     useEffect(() => {
//          axios
//          .get("https://api.nasa.gov/planetary/apod?api_key=XIajNSDDfxRL6vGAud2dsKzc1o3ZEEzZNOBvKo5s")
//          .then(resp => {
//              console.log(resp)
//          })
//          .catch(error => {
//              console.log("data was not returned", error);
//          })
//      },[])
//      return(
//          <div className ="background"></div>
//      )
//  }

const background = props => {
    return(
        <div className="BackgroundImage">
            <img src = {props.hdurl} alt="space"/>
        </div>
    )
}
 export default background();