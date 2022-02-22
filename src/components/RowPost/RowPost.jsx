import React, { useEffect, useState } from 'react'
import '../../Styles/RowPost.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constants/constant'
function RowPost(props) {
    const [Movies, SetMovies] = useState([])
    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response => {
            console.log(response.data)
            SetMovies(response.data.results)
        }).catch(err => {
            // alert('Network Error')
        })
    }, [])

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {Movies.map((obj) => 

                    <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )}
            </div>
        </div>
    )
}

export default RowPost
