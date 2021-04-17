import Head from 'next/head'
import Link from 'next/link'


export default function Ambition() {
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
        <h2>Creative coding resources</h2>
        <h3>Created 26 Dec 2020</h3>
        <h3>Updated 16 Apr 2021</h3>

        <p>In this post I list resources I’ve found useful in learning creative coding. I’ll continue to update it as I continue to learn more!</p>

        <h4>Tutorials and courses</h4>

        <p>Coding Train: Great YouTube tutorials from beginner to advanced. No matter what you’re trying to do related to creative coding, there’s a good chance this Daniel Shiffman, the channel’s creator, has made a video about how to do it.</p>

        <p>Tim Rodenbröker: This site delivers a beginner-friendly introduction to creative coding. As a matter of fact, I got started by using his “Creative Coding Essentials” course! He teaches the nuts and bolts of how to use Processing. He also has other courses, including one on how to think creatively. Creativity is the challenging part of creative coding. Figuring out what to make and how to make it look good is usually harder than actually making it. You have to become a Patreon subscriber to him to see his courses. It’s five euros per month, well worth the investment in my opinion!</p>

        <p>Frederik Vanhoutte: It’s always awesome when an artist whose work makes you go “how the did they do that?” explains the thinking behind their code. I found his line intersection tutorial particularly useful.</p>

        <p>Tyler Hobbs: Another brilliant artist. Some techniques that have found their way into my work, like triangle subdivision, I learned from the explanations in his essays.</p>

        <h4>Books</h4>

        <p>The Nature of Code by Daniel Shiffman: This book, written by the person behind the Coding Train channel unpacks the algorithms behind natural phenomena and shows how to code them. It covers topics like replicating the force of gravity, mimicking how birds flock, and drawing trees using fractal-like patterns. The book is available for free online. You can also purchase a physical copy.</p>

        <p>The Book of Shaders by Patricio González Vivo and Jen Lowe: This book, available for free online, shows how to use shaders for creative coding. The book uses GLSL. Programming shaders is pretty tricky. You have to think about problems in a different way than you may be used to. If you stick with it, though, you learn how to make some really cool things and expand thinking about how to draw things.</p>

        <p>Creating Symmetry by Frank Farris: This book exposes the mathematics behind symmetry. We know when something is symmetrical and when it’s not when we see it. But defining mathematically what makes something symmetrical, and exploring the property to make designs, is a whole other (interesting) problem. This book is math heavy and focused on making designs for wallpapers. However insights from it can be gleaned and applied to creative coding.</p>

      <p> Drawing on the Right Side of the Brain by Betty Edwards: I’m stronger in the technical side of creative coding than the artistic side. My programming background made me decent at groking the algorithms used in creative coding, but thinking like an artist isn’t something I have as much experience in. This book explains how to think in spaces, edges, and shadows. It gives exercises to help you draw what is, instead of what your brain thinks should be.</p>

        <h4>Artists</h4>
        <ul>
        <li>Sander Sturing</li>

        <li>Desmond Clarke</li>

        <li>Tyler Hobbs</li>

        <li>Anders Hoff</li>

        <li>Frederik Vanhoutte</li>

        <li>Tim Rodenbröker</li>

        <li>okazz</li>

        <li>Naoki Tsutae</li>

        <li>takawo</li>

        <li>sayama</li>
        </ul>
      </article>


            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
