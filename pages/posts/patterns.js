import Head from 'next/head'
import Link from 'next/link'


export default function Patterns() {
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
        <h2>Patterns</h2>
        <h3>21 Oct 2020</h3>
        <p>A theme in the sketches I make, and in those of many other creative coders, is patterns. I like combining simple shapes and seeing what they turn into.  There may be variations in noise, time, color, but the essence of many sketches is patterns.</p>

<p>Humans are in love with patterns. Our brains are designed to recognize them. It's not surprising then that we seek them out when we code.  When you see patterns in nature, they aren't identical. Each iteration of the pattern is slightly different.</p>

<p>When you look at the tiles on a surface they are very similar, but each one is unique. Each one's color will be just a bit different. Each one will be ever so slightly out of alignment. Some may be worn down more than others. Some will have cracks.</p>

<p>With noise and randomness you can create patterns that look real. That's one of the greatest features of creative coding. The understanding you get from coding in turn helps you understand nature better. Everything is the same, but everything is different. Everything has its place, and everything comes together as one.</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
