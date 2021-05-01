import Head from 'next/head'
import Link from 'next/link'


export default function WhyILoveCoding() {
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
        <h2>Why I love coding</h2>
        <h3>28 March 2020</h3>
        <p>I like the methodical grind of writing. It’s deliberate. Every word has a role. Every sentence plays a part.</p>

<p>I also like the visual aspect of photography. A picture is worth a thousand words. A photo can transmit in an instant what could take pages to write out.</p>

<p>Coding combines those. The process of writing plus the impact of photography. The level of detail is more extreme than normal writing. When writing people can misspell words and the reader may not even notice, much less not understand what was written. We add flowery language. We communicate in metaphors, sayings, and half truths. Outright lies, even. We go out of our way to not say just what we mean, and no more.</p>

<p>When writing a program, however, a single letter out of place can break a program. Everything has to be in order. Everything must be made explicit. There’s no room for ambiguity. And through that program you make a computer come to life. You can communicate in a more visual way, like photography. It can even be more impactful, because with coding you can draw someone into your world. They can interact with your creation. It’s a level of communication and connection that’s hard to match.</p>

<p>That’s why I love it!</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
