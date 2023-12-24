import React from 'react'

export default function Figure({imageURL, caption}){
    return (
      <figure>
            <img src = {imageURL}/>
            <figcaption>Awesome pic on {caption}</figcaption>
          </figure>
    )
  }
