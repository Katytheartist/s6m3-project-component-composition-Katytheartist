import React from 'react'
import styled from 'styled-components'

const StyledFig = styled.figure`
  max-width: 75%;

  figcaption{
    font-style: italic;
    color: blue;
  }
`

export default function Figure({imageURL, caption}){
    return (
      <StyledFig>
            <img src = {imageURL}/>
            <figcaption>Awesome pic on {caption}</figcaption>
          </StyledFig>
    )
  }
