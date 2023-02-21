import React, { useState } from "react";





const Album = ({ album }) => {
    const [baseLike, setLike] = useState("20px")
    const like = (e) => {
        (baseLike == "20px") ?
            setLike("10px") :
            setLike("20px")
            e.target.style.fontSize = baseLike
            increaseCounter()
        }


        const [counter, setCounter] = useState(0)
        const increaseCounter = () => {
            console.log("clickeds")
            setCounter(prevState => (prevState + 1))
           
        }

       

        console.log(counter)
        return (
            <>
                <h4>Name of the album: {album.name}</h4>
                <h5>Date released: {album.date}</h5>
                <h6> Album cover: {album.cover}</h6>
                <marquee><button onClick={ like}><marquee>Like:</marquee></button></marquee>
                <h7>Likes counter: {counter}</h7>
                

            </>

        )

    }

    export default Album
