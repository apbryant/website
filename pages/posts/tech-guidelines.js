import Head from 'next/head'
import Link from 'next/link'


export default function TechGuidelines() {
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
        <h2>Tech guidelines</h2>
        <h3>1 January 2020</h3>
        <p>Use the least amount of technology necessary to solve the problem.</p>

<p>I’ll quote Benjamin Hardy: “The amount of time you spend not looking at a screen reflects the quality of your actual life”.</p>

<p>Use technology primarily to create or automate, rather than to consume or correspond.</p>

<p>Don’t use technology to distract yourself.</p>

<p>Technology is a means to an end, not an end in itself.</p>

<p>Technology can help solve problems. It also creates new ones.</p>

<p>Technology doesn’t remove accountability.</p>

<p>If technology makes something cheaper, more of it will be done.</p>

<p>Technology has no morals.</p>

<p>Technology can’t make you happy.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
