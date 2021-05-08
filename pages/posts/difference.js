import Head from 'next/head'
import Link from 'next/link'


export default function Difference() {
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
        <h2>Difference</h2>
        <h3>11 July 2019</h3>
        <p>Today in the United States every city you go to has the same shit. The same stores, the same music, the same culture, just the same. You can go from New York to Los Angeles, a distance of thousands of miles, without feeling like you went anywhere.</p>



<p>In Santiago, literally on the other side of the world, can I can read mostly the same books, eat the same food, and listen to the same music as I would as if I were back in Virginia.</p>



<p>Variety is the spice of life. It makes things interesting. This culture of sameness makes everything secure, predictable…but boring.</p>



<p>Let’s embrace difference.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
