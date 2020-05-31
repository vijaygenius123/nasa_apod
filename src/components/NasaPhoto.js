import React, { useState, useEffect } from 'react'

import NavBar from './NavBar'

const API_KEY = process.env.REACT_APP_NASA_API_KEY
function NasaPhoto(props) {
    const [photoData, setphotoData] = useState(null)

    useEffect(() => {

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            const data = await res.json()
            setphotoData(data)
        }
        fetchPhoto();
    }, [])

    if (!photoData) return <div />

    return (
        <>
            <NavBar />
            <div className="nasa-photo">

                {photoData.media_type === 'image' ?
                    <img src={photoData.url} alt={photoData.title}></img> : (
                        <iframe
                            title='space-video'
                            src={photoData.url}
                            frameborder="0"
                            allow="encrypted-media"
                            allowFullscreen
                            className="photo"
                        ></iframe>
                    )
                }
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </>
    )
}

NasaPhoto.propTypes = {

}

export default NasaPhoto

