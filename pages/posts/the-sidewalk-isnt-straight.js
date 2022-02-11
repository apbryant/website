import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function TheSidewalkIsntStraight() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>The sidewalk isn't straight</h2>
        <h3>11 February 2022</h3>

<Image
            src="/images/the-sidewalk-isnt-straight/20170510_101702.jpg" // Route of the image file
            layout="intrinsic"
            height={750} // Desired size with correct aspect ratio
            width={562.5} // Desired size with correct aspect ratio
            alt=""
          />
       <p>You don’t walk on the sidewalk.</p>

	  <p>You dance over it.</p>

<p>That’s because the sidewalk isn’t straight.</p>

<p>It twists and turns, dips and winds.</p>

<p>Mountains and valleys spring from cracks.</p>

<p>Storms leave oceans.</p>

<p>Entire universes to explore, as you dance.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
