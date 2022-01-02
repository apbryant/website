import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function LetsSee() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Let's see</h2>
        <h3>02 January 2022</h3>


<p><a href="https://github.com/apbryant/creativecoding/blob/master/lets_see/lets_see.pde">Link to code</a></p>
<p>One of my favorite algorithms for its simplicity and result is the noise spiral. With it a spiral is drawn with the coordinates of the lines comprising the spiral varying from the "perfect circle" position using Perlin noise.</p>

<p>I build upon this algorithm by tweaking how the spiral coordinates are created and layering spirals on top of each other in different positions.</p>



<Image
            src="/images/lets-see/sketch-uuid-8472aa5c-9edc-4c88-882c-5954557e8852.png" // Route of the image file
            layout="intrinsic"
            height={600} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt=""
          />
 

<Image
            src="/images/lets-see/sketch-uuid-7b71f312-3b13-42d3-ab2f-8e6dda2aa54c.png" // Route of the image file
            layout="intrinsic"
            height={600} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt=""
          />
 




<Image
            src="/images/lets-see/sketch-uuid-7f51ef2a-92fa-41c2-8448-97dfb9ea8250.png" // Route of the image file
            layout="intrinsic"
            height={600} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt=""
          />
     

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
