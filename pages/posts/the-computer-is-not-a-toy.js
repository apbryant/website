import Head from 'next/head'
import Link from 'next/link'


export default function TheComputerIsNotAToy() {
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
        <h2>The computer is not a toy</h2>
        <h3>14 July 2019</h3>
        <p>The computer is not a toy. It’s a value creation tool.</p>



<p>I’ve come to appreciate more the power of computers since I’ve worked with them more intimately as a programmer.</p>



<p>Computers are one of the most powerful fools humanity has created. We created the army of robots that can work for us. They give us immense power to connect with people, express ourselves, and have insights that previous generations could only dream of.</p>



<p>But only if they are used properly.</p>



<p>Used improperly, the computer can destroy lives. Used properly, the computer can change the world.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
