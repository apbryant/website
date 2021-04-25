import Head from 'next/head'
import Link from 'next/link'


export default function WhatIsASineAnyway() {
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
        <h2>What is a sine, anyway?</h2>
        <h3>14 June 2020</h3>
        <p>What is a sine, anyway?  I’ve used it many times in code I’ve written, but didn’t know that much about it.</p>

<p>The sine expresses the relationship between two sides of a triangle.</p>

<p>Imagine a circle. That circle is divided into four equal sections, like the slices of a pizza. Let’s make the distance from the center of the circle to its edge equal to one.</p>

<p>What you get is the unit circle, and it’s key to understanding what a sine is.</p>

<p>Now, draw two lines. Draw one line from the circle’s center to anywhere on its edge. Then draw another line from that point towards the line that goes horizontally across the unit circle. You should have drawn a triangle.</p>

<p>This triangle will have one side that’s longer than the others. The line that goes from the center of the circle to the edge. This line is called the hypotenuse.</p>

<p>Look at one of the corners of the triangle. The corner will consist of two lines that are going more or less in the same direction. The “gap” between the lines is an angle. We can imagine a triangle’s angle as how “spread out” the lines that make up one of its corners are. The more the lines “spread out”, the greater the angle.</p>

<p>Take an angle in the triangle. The sine of an angle is the length of the side of the triangle opposite to it divided by the length of the side of the triangle’s hypotenuse, or longest side.</p>

<p>Who came up with this?</p>

<p>Indian astronomers discovered it in the Gupta Empire in ancient India. From there it was adopted by Muslim mathemeticians, and later by Europeans. Its first known reference is in Aryabhatiya, a Sanskrit mathematical treatise written by Aryabhata around 510. The original word for the concept is, “ardha-jya” is translated as “half-chord”. A chord being the straight-line distance between two points on a circle’s circumference. This was worked out centuries earlier by Greek and Roman mathematicians.</p>

<p>It was often shortened to “jya”, it was translated into Arabic as “jiba”, a word that, outside this context, is meaningless in the language. Arabic is written without short vowels, so the “jiba” was written as “jb”. Arabic-Latin translators interpreted “jb” as meaning “jaib” (bay or inlet). They then used the equivalent Latin word “sinus”. From that, we get “sine”</p>

<p>So, if you’re into creative coding, why should you care about this?</p>

<p>If you draw the sines of different numbers, you get a wave pattern.</p>

<p>That wave pattern can be adopted into motion to create smooth, repetitive movement.</p>

<p>The effect is soothing, almost hypnotic. It’s a good way to add a repetitive animation to sketches without a whole lot of code.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
