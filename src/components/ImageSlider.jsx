import React from 'react'
import {useState} from "react"
import "./ImageSlider.css"
import {images} from "./data"

const ImageSlider = ({slides}) => {
//I want to keep track of which index/img I am in..it starts at 0
const [currImg, setCurrImg] = useState(0)

  return (
    <div className='carousel'>
        {/* Img should be background of this div */}
        <div className='carouselInner' style={{backgroundImage: `url(${images[currImg].img})`}}>
            {/* <img src={images[0].img} alt="" /> */}
        </div>
    </div>
  )
}

export default ImageSlider