import Head from 'next/head'
import Link from 'next/link'


export default function Symptoms() {
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
        <h2>Symptoms</h2>
        <h3>14 June 2020</h3>
        <p>There’s the symptom, and there’s the root of the problem.</p>

<p>When you have a headache, you may take medicine to treat the symptom. The problem could be that you spent too much time on your computer, or didn’t drink enough water.</p>

<p>When debugging a program, the place where the exception is the symptom is not where the problem originates.</p>

<p>What happened to George Floyd was a symptom.</p>

<p>The racist beliefs held by many in the United States are the problem.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
