import Head from 'next/head'
import Link from 'next/link'


export default function TheWolf() {
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
        <h2>The wolf</h2>
        <h3>8 July 2019</h3>
        <p>Have you heard the Native American tale about the two wolves? Basically, each one of us has two wolves inside us that are constantly fighting for influence over us. One is a good wolf and the other is an evil wolf. The wolf that wins is the one we feed by paying attention to.</p>

  <p>Negative thoughts are always going to be present. Every single day. It’s up to us to decide to entertain them or let them go.</p>

  <p>Feed the good wolf.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
