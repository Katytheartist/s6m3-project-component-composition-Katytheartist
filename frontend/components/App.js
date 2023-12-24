import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`





function App() {
  const [apod, setApod] = useState()
useEffect(()=>{
  function fetchPhoto(){
    axios.get(URL)
    .then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err.message)
    })
  }
  //fetchPhoto()
  setApod({
    "copyright": "solargraph",
    "date": "2023-12-22",
    "explanation": "A single 183 day exposure with a pinhole camera and photographic paper resulted in this long-duration solargraph. Recorded from solstice to solstice, June 21 to December 21, in 2022, it follows the Sun's daily arcing path through planet Earth's skies from Mertola, Portugal. On June 21, the Sun's highest point and longest arc represents the longest day and the astronomical beginning of summer in the northern hemisphere. The solstice date with the fewest hours of daylight is at the beginning of winter in the north, corresponding to the Sun's shortest and lowest arc in the 2022 solargraph. For 2023, the northern winter solstice was on December 22 at 3:27 UTC. That's December 21 for North America time zones.",
    "hdurl": "https://apod.nasa.gov/apod/image/2312/solsticesolargraphy.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "183 Days in the Sun",
    "url": "https://apod.nasa.gov/apod/image/2312/solsticesolargraphy1024.jpg"
})
}, [])
if (!apod) return <h3>Loading...</h3>
  return (
    <section>
      <Card
        title = {apod.title}
        text = {apod.explanation}
        imageURL = {apod.url}
        date = {apod.date}
      />
    </section>
  )
}

export default App
