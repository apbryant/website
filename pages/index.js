import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
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
      <main>
        <h1 className="title">
          Welcome to my site!
        </h1>

        <p>I'm a programmer from Arlington, Virginia.</p>
        <h1>Fun facts</h1>
        <ul>
          <li>I'm a digital artist</li>
          <li>I've lived abroad in Santiago, Chile since July 2016</li>
          <li>I've worked as an English as a foreign language teacher</li>
          <li>My favorite food is 🍕</li>
          <li>I speak fluent Spanish</li>
        </ul>
        <h1>Where I am</h1>
        <ul>
          <li>Santiago, Chile</li>
          <li><a href="https://twitter.com/andrewpbryant">Twitter</a></li>
          <li><a href="https://www.instagram.com/andrew_paul_bryant/">Instagram</a></li>
          <li><a href="https://github.com/apbryant">GitHub</a></li>
        </ul>
        <h1>Stuff I sell</h1>
        <ul>
          <li><a href="https://www.etsy.com/shop/BryantGenArt">Digital art</a></li>
          <li><a href="https://gumroad.com/andrewpbryant">Ebooks about digital art</a></li>
        </ul>

      </main>

      <footer>
          © Andrew Bryant
      </footer>


    </div>
  )
}
