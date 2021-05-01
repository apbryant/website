import Head from 'next/head'
import Link from 'next/link'


export default function CornerCases() {
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
        <h2>Corner cases</h2>
        <h3>3 January 2020</h3>
        <p>There’s a concept in programming of an “corner case”. It’s a situation that occurs outside of normal operating parameters, yet is still a valid situation for the problem at hand. When designing a solution to a programming problem, corner cases must be taken into account. The solution must work when they appear.</p>

<p>When living abroad, your life becomes a corner case. Many systems aren’t designed to deal with non-natives, so simple tasks can become complicated. You deal with situations that few people can understand.</p>

<p>But the thing is, most things in life (especially the important things) aren’t that hard to figure out. I remember talking to my dad, feeling anxious about graduating college and finding a job. He told me something along the lines of “Look, you’ll find a job, and you’ll find a place to live, just like everybody else has.” Simple as that. Humans have a wonderful tendency to over-complicate things, so we stress out about the process more than it warrants. Despite living as a corner cases, people do the same. There’s work to be had, and places to live in. People find others to connect with. We get by.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
