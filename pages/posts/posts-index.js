import Head from 'next/head'
import Link from 'next/link'


export default function FirstPost() {
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

      <h1>Posts</h1>
      <div>
      <Link href="/posts/house-disbursements">
        <a>Analysis of Q3 2020 House disbursements</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/ambition">
        <a>Ambition</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/creative-coding-resources">
        <a>Creative Coding Resources</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/shadow">
        <a>The shadow</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/liberal-technical-subjects">
        <a>Liberal and technical subjects are the same</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/what-ive-learned-gen-art">
        <a>What I've learned from generative art</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/lords-prayer-levenshtein-distance">
        <a>From the vault: Levenshtein distance analysis of the Lord's prayer in different languages</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/how-to-draw-subdivided-triangles">
        <a>How to draw lines of subdivided triangles</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/patterns">
        <a>Patterns</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/complicated-jobs">
        <a>Why modern jobs seem so complicated</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/abroad">
        <a>Abroad</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/dont-just-be-a-programmer">
        <a>Don't just be a programmer</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/on-hiring">
        <a>On hiring</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/doing-it-for-free">
        <a>Doing it for free</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/symptoms">
        <a>Symptoms</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/what-is-a-sine-anyway">
        <a>What is a sine, anyway?</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/back-on-social-media">
        <a>Back on social media</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/full-stack-heroes-interview">
        <a>Full Stack Heroes interview</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/on-lisp-and-latin">
        <a>On Lisp and Latin</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/my-experience-learning-lisp">
        <a>My experience learning Lisp</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/on-remote-work">
        <a>On remote work</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/everything-popular-is-wrong">
        <a>Everything popular is wrong</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/the-benefits-and-drawbacks-of-coding">
        <a>The benefits and drawbacks of coding</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/why-we-dont-build">
        <a>Why we don't build</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/why-i-love-coding">
        <a>Why I love coding</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/walking-through-my-decision-to-move-abroad">
        <a>Walking through my decision to move abroad</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/connecting-the-dots">
        <a>Connecting the dots</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/some-mental-mistakes-americans-make">
        <a>Some mental mistakes Americans make</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/corner-cases">
        <a>Corner cases</a>
      </Link>
      </div>
      <div>
      <Link href="/posts/tech-guidelines">
        <a>Tech guidelines</a>
      </Link>
      </div>




            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
