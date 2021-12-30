import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function ASketchOfAChurchInMaipu() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>A sketch of a church in Maipú</h2>
        <h3>20 December 2021</h3>

<Image
            src="/images/a-sketch-of-a-church-in-maipu/maipu_church.jpg" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={421.5} // Desired size with correct aspect ratio
            alt=""
          />

<p>This creative coding sketch is my favorite out of the ones I've made.</p>

<p>I took the photo while I was living in Chile. The building in the photo is the Votive Temple of Maipú. It's a  cathedral in Maipú, a comuna in southwestern Santiago, Chile.</p>

<p>I edited the photo in Lightroom, and processed the image further with a program I wrote using Clojure and Quil, Clojure's implementation of the Processing API.</p>

<p>In a lot of my sketches with photos I divide the canvas with the photo loaded onto it into a grid and copy each section to another location on the canvas and/or rotate each section of the canvas by a differing amount, producing some neat visual effects. This is what I did using Quil to the photo.</p>

<p>The photo itself was a good starting point. The cathedral took and contrast between the sky and ground. The group of people in the lower right add a nice touch. They help the viewer have the correct scale of things when viewing the photo.</p>

<p>By adding more structure and texture, the generated curves complement the flatness of the sky. The way the building's walls bend and wave give the image an otherworldly feeling, almost as if you were in a dream.</p>

<p>I like how the cross comes into focus, nearly untouched by the program I wrote. It's grounding; a reminder of the role of religion in society. Religion is one of the constants across human cultures. Every group of people seems to believe in something. In the Americas, a lot of our baseline assumptions for how society should work are derived from Christianity. Everything from the names we call ourselves, to the structure of our weeks is based on that religion.</p> 

<p>The other thing I like about the sketch is how the pieces of it stretch across space and time. A lot had to happen all over the world for the work to be made.</p> 

<p>The temple was ordered to be built in 1818 by Bernardo O'Higgins to thank Our Lady of Mount Carmel, a figure in Catholicism, for helping the Chileans win their war of independence against the Spanish Empire.</p>

<p>And then, why have the idea of a temple in the first place? The principal actors in this war were Christians, practicing a religion from Judea, a province o the Roman Empire in what's now called Israel, that began over a millennium before this conflict.</p>

<p>So, we have a temple in Chile, a religion from the Middle East, a war fought in South America against a European power, and using largely European language and technology. Furthermore, this temple had to be completed and kept in good condition. There are lots of earthquakes in Chile. Keeping buildings upright there is no small feat.</p>

<p>And then, I had to be there. I had to be kept alive for twenty-some years and somehow make my way across the world. I then captured the image on a smartphone, another design and engineering marvel, designed in South Korea and built in Vietnam. I finally processed it with layer upon layer of American software.</p>

<p>So much came together for this image. Religion, technology, politics, joined as one. It's a great reminder that nothing exists on an island. Everything has ripple effects that span the entire world.</p>

     </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
