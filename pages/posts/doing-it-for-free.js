import Head from 'next/head'
import Link from 'next/link'


export default function DoingItForFree() {
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
        <h2>Doing it for free</h2>
        <h3>21 June 2020</h3>
        <p>If someone doesn’t do something for free, they shouldn’t be paid to do it.</p>

<p>If someone needs money to do something, they’re being driven by external motivation by internal motivation.</p>

<p>If you need to be paid to do something, you just don’t like it that much. If you don’t like doing something, you won’t do it well. In order to do something well, the person doing it has to care about what they’re doing enough to go the extra mile. They have to enjoy the process. Every craft has its version of stuffing envelopes or cleaning floors. You need to find the people who enjoy cleaning the floors because doing so is its own reward. Only those people will deliver the best work.</p>

<p>The free filter is powerful. If you’re not getting paid to do something, you can’t dull your dissatisfaction with shopping, alcohol, vacations, or other escapes that people devise for themselves because they don’t like what they do. Yeah, you might not like being a lawyer. But it pays you enough to eat at fancy restaurants and, hey, Michelin-star food tastes pretty good. So you use the things money buys as a quick fix to cover up the symptom instead of treating the real problem.  You have to look squarely at what you’re doing and decide “do I really want to do this?”</p>

<p>Besides, wealth isn’t money. It’s food, water, clothing, and shelter. It’s the relationships we have with others. The money is just a symbol for these things. It’s not the things themselves. This is why chasing money is never satisfying. You’re like a horse going after a carrot. You never get what you really want.</p>

<p>External motivation will eventually run out. You’ll eventually get bored of your diversions, roll over, and give up. Internal motivation keeps going through challenges and setbacks. External motivation looks for shortcuts that look expedient but have negative second- and third- order effects. Internal motivation always seeks to do things the proper way.</p>

<p>A way to expand the scope of activities that are intrinsically motivating to you is to change the scope of that activity’s recipients. “I just don’t like doing X” isn’t true. It’s not the activity that you dislike, but who it’s done for. There really aren’t any inherently unlikeable activities. Being at someone’s beck and call and cleaning up their poop sounds unpleasant. Yet most people opt to spend years doing just that. Why? Because raising a child demands it. And the recipient of their efforts makes it worthwhile.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
