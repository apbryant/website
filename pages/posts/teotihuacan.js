import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function Teotihuacan() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Teotihuacan</h2>
        <h3>02 January 2022</h3>

<Image
            src="/images/teotihuacan/sketch_065dd14e-1c0b-49ee-a485-b53b5820026a.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt=""
          />

<p>I made this sketch thinking about Teotihuacan, an ancient city close to what's now Mexico City. I'd read about it in The Dawn of Everything and I wanted to make something inspired by the city's diagram in the book.</p> 
 
<p>In this sketch I create grids of squares. I split the canvas into a grid. Each grid cell can be further divided into its own grid until a maximum depth is reached. For each grid cell I decide whether to divide it further, or show a square in that grid cell's space.</p> 
 
<p>I choose between a range of random integers to decide how many cells a new grid should have. This offsets the grid lines, making the sketch a little more dynamic and less monotonous.</p> 
 
<p>The sketch uses black and gray. Because the cells have the same color, the join together into some neat shapes. It also reminded me of the stone ruins of a city lost to time.</p> 
 
<p>Here's a version with a red palette. The individual squares show more in this one.</p> 

<Image
            src="/images/teotihuacan/sketch_08cc1fbd-ed7d-4104-bec3-c169f02fc6b6.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt=""
          />




<p><a href="https://github.com/apbryant/creativecoding/tree/master/teotihuacan/sketch
">Link to code</a></p>
     </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
