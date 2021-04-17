import Head from 'next/head'
import Link from 'next/link'


export default function Abroad() {
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
        <h2>Abroad</h2>
        <h3>12 July 2020</h3>
        <p>For decades teaching English abroad has been a way for a young person looking for a little adventure to see the world while earning money. Teaching English was an accessible way for a young person to finance a stay abroad. Even with coronavirus, there will be demand for learning English. So there will still be teaching. But it’ll be done more online. The experience of being a teacher abroad has indefinitely been put on hold.</p>

  <p>This is a shame, because the really valuable part of being an English teacher is doing it in another country. When you do it you push yourself out of your comfort zone both by jumping into a new profession and by moving to a new country.</p>

  <p>Teaching abroad gives you a perspective that you don’t get at home. At home you just go along the tracks that have been laid out for you. When you teach abroad you step out of the rat race. You begin to see that you have options. “Oh, I don’t have to do the thing that society said I should do. I can if I want to, but I could do something else.”</p>

  <p>Freed from the roles you needed to fill, you see yourself for who you are. You have the space to try things without the world noticing. You begin to understand what you really want.</p>

  <p>When I was in college I thought I’d work in Washington, DC. I’d graduate, get a job somewhere in the metro area’s political-industrial complex, and spend my career there. I liked politics. I thought working in that area would be interesting. But it was also what there was. It’s what the grown-ups did. It’s what many of my peers went into. It’s what was in the news. I just chose the default option and molded my tastes accordingly.</p>

  <p>Only with the space that moving abroad gave me could I believe that I could work in tech. I had already pivoted once. I could do it once more. I had done something outside of my norm. Why not do it again?</p>

  <p>I wonder if something will replace teaching English. I don’t know what it’ll be. Whatever it is, I hope that it gives similar magic for those who do it as I felt as an English teacher in Santiago.</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
