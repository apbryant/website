import Head from 'next/head'
import Link from 'next/link'


export default function EverythingPopularIsWrong() {
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
        <h2>Everything popular is wrong</h2>
        <h3>17 May 2020</h3>
        <p>“Everything popular is wrong.” -Oscar Wilde</p>

<p>I read this quote years ago in The 4-Hour Workweek by Tim Ferriss. I didn’t get it then, but it’s meaning has become more apparent to me.</p>

<p>Most people don’t exercise.</p>

<p>Most people eat unhealthy food.</p>

<p>Most people don’t read books.</p>

<p>Most people don’t save.</p>

<p>Most people don’t invest.</p>

<p>Most people don’t have valuable skills.</p>

<p>Most people don’t know themselves.</p>

<p>Most people are reactionary.</p>

<p>Etc.</p>

<p>In order to avoid a lot of problems in life, do the opposite of what most people do.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
