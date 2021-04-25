import Head from 'next/head'
import Link from 'next/link'


export default function DontJustBeAProgrammer() {
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
        <h2>Don't just be a programmer</h2>
        <h3>5 July 2020</h3>
        <p>Don’t just be a programmer.

Programming is a useful skill. It’s valuable. And fun. But it seems risky to base your career on it. Programming is modern-day manual labor. Just like what happened to other forms of manual labor, programming will get automated by computers and/or shipped off to countries where it can be done cheaper.

A lot of programming is repetitive. You’re just writing the same code over and over again with a few tweaks. Some programming software tools already write a lot of boilerplate code for the programmer. Nocode tools will take another bite out of the work that programmers do.

When a programmer will still be needed, any competent programmer will do. Most programs don’t require a genius to write them. Even if you are a genius programmer, it’s safe to say you’re not the only one. There are over seven billion people on the planet after all. The odds of someone coming along who can program for less money than you are very high.

Coding should be something that is a compliment to your skillset. It is an intensifier, a leverage booster. It gives you an ability to implement your ideas for software yourself, whereas someone else would need to ask a developer to do it for them.

What are good things to learn to complement programming? </p>
<h4>Leadership</h4>
  <p>Before we had language, before we were even humans, we looked to leaders to help us organize ourselves. </p>

  <h4>Sales</h4>
    <p>Every job is to a greater or lesser extent a sales job. Even if you don’t call yourself a salesman, you’re still selling your ideas, your visions, and yourself to the rest of the world every single day.</p>

    <h4>Writing</h4>
      <p>Writing is just an extension of selling. Writing is a way of capturing your ideas in a format where they can be easily shared. When you write you’re trying to sell the reader on your ideas. The benefit of writing is what’s written can be accessed asynchronously by people in a different place than you, and in different time periods. The ideas can be reproduced with minimal information loss. This is how we can read books written thousands of years ago in a language that’s not used anymore. The same isn’t true about oral information. Just look at what happens when playing a game of telephone.</p>

      <h4>Design</h4>
        <p>Much to my chagrin, how something is presented matters just as much, if not more, than what is being presented. You could have an incredible idea. But if it’s presented poorly, it won’t gain traction. Everything we make is designed. Knowing how to make stuff the right functional and beautiful will always be in demand. Nobody likes ugly stuff.</p>

        <h4>Idea generation</h4>
          <p>In <em>Average Is Over</em>, Tyler Cowen outlines the scarce commodities of today’s world. They are land, especially quality land, good ideas about what to make, and skilled labor. Valuable land is pretty much sewn up. Skilled labor got a lot less scarce with the rise of remote work. The only means of value creation that can still bring you returns is having good ideas. It’ll pay to be the guy who has good ideas about what should be made.</p>

  <p>These things are timeless. They’re things that are valuable across time and place. Even if programming stops being valuable, these other things will be.</p>

  <p>Specific skills are a means to an end. What you really want is a unique combination of skills and knowledge that nobody else has but you, that help you give people something that they want. Programming can be a part of this, just like the other skills I mentioned above. It’s how you ensure you’ll have a good chance of making a living while doing meaningful work.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
