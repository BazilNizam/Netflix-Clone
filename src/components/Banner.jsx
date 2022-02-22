import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../Constants/constant'
import axios from '../axios'
import '../Styles/Banner.css'

const Banner = () => {

  const [Movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[1])
       

        setMovie(response.data.results[1])
    })
    

  }, [])
  return (
    <div 
    style={{backgroundImage:`url(${Movie? imageUrl+Movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{Movie ? Movie.title : "" }</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{Movie ? Movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
  )
}

export default Banner