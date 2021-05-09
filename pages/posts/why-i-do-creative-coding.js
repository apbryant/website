import Head from 'next/head'
import Link from 'next/link'


export default function WhyIDoCreativeCoding() {
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
        <h2>Why I do creative coding</h2>
        <h3>8 May 2021</h3>

<p>I code for a living. More than building new things or learning new tools, I do it to explore our relationships with technology. Starting with my own.</p>

<p>We don't think enough about this, and it shows. We build for the sake of building without considering the consequences of our actions. We think solutions rely on new technologies rather than different relationships. We feel like we have to use everything and be everywhere. We become distracted and dissatisfied while neglecting what’s most important to us.</p>

<p>If we had a more intentional relationship with technology, I think we’d have more peace of mind and be more effective in our lives.</p>

<p>This is the point behind my creative coding. I take away the fluff around computing. All that's left is the viewer and the program.</p>

<p>It's in that stripped-down space where we can think. When we can see tech for what it is we can better make judgements about it. Why do I use these tools? Do I want this in my life? Under what terms? Where did my opinions about this come from? How does this make me feel?</p>

<p>Creative coding provides a way to open up these discussions.</p>




      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
