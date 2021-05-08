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
        <h2>Doing vs. making</h2>
        <h3>1 September 2019</h3>
        <p>We’re humans. We’re not meant to be comfortable all the time.</p>


      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
