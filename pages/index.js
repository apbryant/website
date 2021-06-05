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
        <p>I'm a software developer and creative coder from Arlington, Virginia.</p>
        <h1>I'm interested in</h1>
        <ul>
          <li>The cultural assumptions that underpin societies</li>
          <li>How to best integrate technology into our lives</li>
          <li>Lanugages and the origins of words</li>
          <li>Doing the unscalable</li>
        </ul>
        <h1>Fun facts</h1>
        <ul>
          <li>I've lived abroad in Santiago, Chile since July 2016</li>
          <li>I've worked as an English as a foreign language teacher</li>
          <li>My favorite food is 🍕</li>
          <li>I speak fluent Spanish</li>
        </ul>
        <h1>Where I am</h1>
        <ul>
          <li>Santiago, Chile</li>
          <li>bryant.andrew01@gmail.com</li>
          <li><a href="https://twitter.com/andrewpbryant">Twitter</a></li>
          <li><a href="https://www.instagram.com/andrew_paul_bryant/">Instagram</a></li>
          <li><a href="https://github.com/apbryant">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/andrew-bryant-90215a6a/">LinkedIn</a></li>
        </ul>
        <h1>Stuff I sell</h1>
        <ul>
          <li><a href="https://www.etsy.com/shop/BryantGenArt">Artwork for sale</a></li>
          <li><a href="https://gumroad.com/andrewpbryant">Ebooks about creative coding</a></li>
        </ul>

      </main>

      <footer>
          © Andrew Bryant
      </footer>


    </div>
  )
}
