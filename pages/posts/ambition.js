import Head from 'next/head'
import Link from 'next/link'


export default function Ambition() {
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
        <h2>Ambition</h2>
        <h3>30 January 2021</h3>
        <p>One thing I changed my mind about in 2020 was ambition.</p>

    <p>I used to think ambition was a character trait worth having. Now I don’t.</p>

    <p>Ambition means, to me, ignoring today for an imagined tomorrow.</p>

    <p>It means, essentially, “I can’t enjoy my life until I have X”.</p>

    <p>If you’re thinking like that, you’ve already lost.</p>

    <p>The present is all there is. By focusing on tomorrow you don’t experience what you have now. Tomorrow might not come. Eventually, it won’t.</p>

    <p>The ambitious pursue external rewards. Prizes, titles, and the like. Those rewards are ones that society put in front of you. You’re letting others dictate what you should or shouldn’t have, instead of deciding those things for yourself.</p>

    <p>You can’t be ambitious by doing something for its own sake. When you do, you’re content with what’s there. You’re not focused on getting something out of it.</p>

    <p>Can’t you set goals? Sure. But the goal should just give you a reason to do more of what you want to do anyway. Whether you hit it or not is a secondary concern.</p>

    <p>Instead of pursuing goals to hit some arbitrary metric or get some arbitrary prize, I just try to live my day-to-day life according to how I want to.</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
