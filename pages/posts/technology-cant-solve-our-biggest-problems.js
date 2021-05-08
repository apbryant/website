import Head from 'next/head'
import Link from 'next/link'


export default function TechnologyCantSolveOurBiggestProblems() {
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
        <h2>Technology can't solve our biggest problems</h2>
        <h3>17 November 2019</h3>
        <p>Tech can’t solve our biggest problems.</p>

<p>The instances where we mistakenly think it can this are just modern-day permutations of the old saying “you can lead a horse to water, but you can’t make it drink”. Tech can make it easier to send messages to others, but can’t give us high-quality relationships. Tech can give us diet and exercise advice, but it can’t get us in shape. Tech can help you read books about mindfulness, can’t give us peace of mind. We have to do these things for ourselves. They involve making decisions for ourselves, and changes within ourselves, beyond the frontier of even the most powerful technologies.</p>

<p>Where we’ve gone wrong is we think tech can solve these problems for us. We even expect it to. Inevitably, we end up disappointed. The more we look for technical solutions, the more the problems compound. In addition, we feel frustrated because we tried every app and hack under the sun, and they just. Don’t. Work. Instead, we have to learn and accept that only we can solve the important problems in our lives, and we need to make the difficult choices required to solve them.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
