import Head from 'next/head'
import Link from 'next/link'


export default function LiberalTechnicalSubjects() {
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
        <h2>Liberal and technical subjects are the same</h2>
        <h3>12 December 2020</h3>
        <p>The divide between the liberal arts and the more technical fields is artificial. They’re just two sides of the same coin. If you go deep enough into one you’ll end up in the other.</p>

<p>Let’s say you’re an artist and you want to learn about how people perceive colors. Well, you’d have to learn about what light is, how different surfaces reflect it, and how the eye and the brain perceive it. That gets you deep into physics and biology. If you’re a dancer and want to study how the body moves, you’ll need to learn about physics, biology, and chemistry to understand how the body generates energy and can move itself a certain way.</p>

<p>If you’re an engineer who just built a beautiful bridge, computer, or app, you may not know why it’s beautiful, but you feel the beauty when you’re around it. If you want to delve into what beauty is and why something is beautiful, you won’t find the answers in engineering. But philosophy may help. If you’re concerned with the impact your work has on others, you may begin to explore the literature around ethics.</p>

<p>The greatest minds of history often integrate science and art. Leonardo da Vinci was an accomplished engineer along with being a celebrated painter. Benjamin Franklin was a scientist as well as a statesman. Steve Jobs’ Apple produced groundbreaking innovations in design and engineering.</p>

<p>I think you need both liberal arts and technical knowledge to do great work. If you just know liberal arts you can construct good arguments but can’t get stuff done in the real world. If you only have technical knowledge you become a poor imitation of a robot or computer. You can turn out widgets or crunch numbers but can’t think for yourself. It’s those those with both types of knowledge that can get the most out of human experience.</p>

<p>The good thing about this is that it doesn’t matter what you study. The only thing that’s important is that you follow your curiosity wherever it leads. If you go deep enough down one rabbit hole, it’ll teach you a lot.</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
