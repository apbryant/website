import Head from 'next/head'
import Link from 'next/link'


export default function Reinvention() {
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
        <h2>Re-invention</h2>
        <h3>16 September 2017</h3>
        <p>Re-invention: When you don’t like your options on the table of life, you break the table and build a new one.</p>

<p>Since leaving my dorm in May of 2015 I have had two internships and two jobs. I’ve been fired. I’ve moved three times. One of those moves was out of my home state. Another was halfway across the world. I flipped over the table.</p>

<p>It’s a good exercise to do every now and again. Outside of the laws of physics, nothing has to be a certain way. If you don’t like something in life, you need to make a change. And the easiest thing you can change, often the only thing, is yourself.</p>


      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
