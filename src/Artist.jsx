import React from "react";
const Artist = ({artist})=>{
    return (
        <> 
        

        <h1>Artist's name: {artist.name}</h1>
        <h2>Music type: {artist.type}</h2>
        <h3>Intro: {artist.intro}</h3>

      
        </>
       
    )

}

export default Artist
