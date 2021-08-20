import Head from 'next/head'
import Link from 'next/link'


export default function Comfort() {
  return (
    <>
    <Head>
      <title>Andrew Bryant</title>
      // <link rel="icon" href="/favicon.ico" />



      </Head>
      <div class="headerDiv">

      <Link href="/">
        <a>Home</a>
      </Link>
      {" "}

      <Link href="/posts/posts-index">
        <a>Posts</a>
      </Link>
      {" "}
      <Link href="/artwork">
        <a>Artwork</a>
      </Link>
      {" "}

      <Link href="/cv">
        <a>CV</a>
      </Link>

      </div>


      <article>
        <h2>Travel thoughts</h2>
        <h3>20 August 2021</h3>

        <p>Here are some thoughts I had travelling from Chile to the United States, post covid and after about 1.75 years without being in the U.S., and from my first week there.</p>

        <ul>
        <li>Aviation is amazing. For several hundred dollars you can be on the other side of the world in less than a day.</li>
        <li>Shout out to flight crews. These people work all night so I could get to where I wanted to go.</li>
        <li>I had to show some extra documents, like a PCR test and mobility pass. But other than that, travel was the same as before.</li>
        <li>I was so close to so many people in the planes and airports. Each of them could probably a genius at something. Do they know what that thing is, and are they cultivating it? Who is the <a href="http://www.paulgraham.com/taste.html">Leonardo of Arlington or Santiago?</a></li>
        <li>They have messaging on flights now. Airplanes used to offer solitude with ones thoughts, respites form the hectic nature of life. Why do we want to take that away?</li>
        <li>Pack light. Then pack even lighter.</li>
        <li>The U.S. is very diverse. It's incredible to see</li>
        <li>Lots of people in the U.S. dress like they rolled out of bed or are on their way to the gym.</li>
        <li>Change your money before leaving, if possible.</li>
        <li>Virginia in the summer is a steam room. It also rains a lot.</li>
        <li>The trees in Virginia are huge. You probably need all that rain to grow trees that tall. Insert metaphor about hard times making hard people here.</li>
        </ul>



      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
