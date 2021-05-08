import Head from 'next/head'
import Link from 'next/link'


export default function WeKnowWhatToDo() {
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
        <h3>12 July 2019</h3>
        <p>Most things in life aren’t that complicated. When we have a problem we know, deep down, what we need to do. The issue is that a lot of times, we just don’t want to do it.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
