import Head from 'next/head'
import Link from 'next/link'


export default function FullStackHeroesInterview() {
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
        <h2>Full Stack Heroes interview</h2>
        <h3>19 May 2020</h3>
        <p>I was interviewed by Kris Bogdanov for his site Full Stack Heroes. I shared my experiences and learnings from being a developer. You can check it out here: https://fullstackheroes.com/interviews/andrew-bryant</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
