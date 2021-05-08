import Head from 'next/head'
import Link from 'next/link'


export default function WhatIveLearnedAfterThreeYearsInChile() {
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
        <h2>What I've learned after three years in Chile</h2>
        <h3>Created 20 July 2019</h3>
        <h3>Updated 8 May 2021</h3>
        <p>What I’ve learned in my three years in Chile…</p>
        <ul>
<li>There are some differences in culture, but the basics are the same everywhere. People get up in the morning, do something to support themselves, spend time with people they care about, and go to sleep. Repeat.</li>



<li>Famer’s market produce can be cheaper than supermarket produce.</li>



<li>It’s not really an earthquake unless it tops seven on the Richter scale.</li>



<li>It’s good to get out into nature to remind yourself where you are. Cities feel like cities everywhere. But nature makes a place distinct.</li>



<li>Bread baked fresh tastes amazing.</li>



<li>Being somewhere where you can live your life as you see fit without too much political or economic hassle means a lot.</li>



<li>You can’t think something about others without thinking it about yourself.</li>



<li>Despite making much less money, Chileans live a life very similar that of many Americans.</li>

<li>Your mind can amplify whatever is happening at the moment, turning a kind of cool event into the best thing ever or a minor annoyance into a huge calamity.</li>
</ul>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
