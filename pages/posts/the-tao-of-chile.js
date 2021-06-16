import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function TheTaoOfChile() {
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
        <h2>The Tao of Chile</h2>
        <h3>15 June 2021</h3>
        <p><em>“The way of the Tao is simple—
 stop striving, defeat desire.
 In the absence of striving, there is peace;
 in the absence of desire, there is satisfaction.”</em></p>

<p><em>-Tzu, Lao; Torode, Sam. Tao Te Ching (p. 37). Ancient Renewal. Kindle Edition.</em></p>

<Image
  src="/images/the-tao-of-chile/sketch.jpg" // Route of the image file
  layout="intrinsic"
  height={680} // Desired size with correct aspect ratio
  width={1209} // Desired size with correct aspect ratio
  alt=""
/>


<p>One thing I noticed about the people in Chile, and one of the larger cultural differences it has with the United States, is that the people here are more relaxed. This realization was very subtle. It dawned on me over time, after years of watching people in both countries. It’s how at lunchtime colleagues eat together at a restaurant instead of stuffing down a sandwich at their desks. It’s the way people hang out outside instead of scurrying to their next engagement. It’s the ease with which they handle situations that would put Americans into a tizzy. It’s noticing the tense faces, steely expressions, and fast clips of Americans for the first time. When you’re not immersed in it it sticks out.</p>

<p>This happens because Chileans don’t strive. They make the best of what they have. This is why they seem less stressed in contrast to the American who is never content, always reaching for more because nothing is good enough.</p>

<p>They don’t have the newest phones the day that they come out. They aren’t decked out in designer gear. So what? Do you know what they do have? Lives.</p>




      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
