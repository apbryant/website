import Head from 'next/head'
import Link from 'next/link'


export default function Shadow() {
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

      <Link href="/posts/first-post">
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
        <h2>The shadow</h2>
        <h3>20 Dec 2020</h3>
        <p>Writers like James Clear and Mark Manson have written about the idea of the shadow: what makes someone successful is the source of their greatest flaws. The best thing about someone is also the worst thing about them.</p>

<p>The shadow doesn’t isn’t just for people. It applies to larger groups as well. Companies, governments, and societies.</p>

<p>Take the United States as an example. It’s a competitive, work-oriented society that produces huge amounts of innovation, wealth, and creative output. We all benefit. Its culture is the secret behind its political, cultural, and economic dominance. It’s also the cause of its opioid epidemics, mass shootings, high personal debt, and chronic unhealthiness. All of these are caused, I think, because Americans, in general, put career success and making money above everything else.</p>

<p>One of the things I remember from studying economics in university is that there is no free lunch. Everything has a cost. The more extreme an aspect of someone is, the greater the cost of harboring that characteristic is.</p>

<p>My shadow is my ability to be alone. It allows me to learn, think, and create. It also makes it more difficult for me to work in groups and form relationships.</p>

<p>Perhaps the only way to not have any shadows is to be so bland and boring that you cease to be truly human. And who wants that?</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
