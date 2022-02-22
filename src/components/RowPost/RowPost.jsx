import React, { useEffect, useState } from 'react'
import '../../Styles/RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/constant'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [Movies, SetMovies] = useState([])
    const [UrlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data)
            SetMovies(response.data.results)
        }).catch(err => {
            // alert('Network Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovieClick= (id) =>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Array empty')
            }
        })

    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {Movies.map((obj) =>

                    <img onClick={()=>handleMovieClick(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                )}
            </div>

            {UrlId && <YouTube opts={opts} videoId={UrlId.key} />}

        </div>
    )
}

export default RowPost
