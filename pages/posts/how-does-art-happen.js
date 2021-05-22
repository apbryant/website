import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HowDoesArtHappen() {
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
        <h2>How does art happen?</h2>
        <h3>22 May 2021</h3>
        <p>From the outside it seems like this mysterious process of the muse visiting, taking over, and disappearing. Nothing could be further from the truth. The reality is that artists have systems for generating, capturing, and curating ideas. I'll walk you through how I do it, and share some tips on how you can too.</p>
        <h4>Collecting ideas</h4>
        <p>The first step is to collect ideas. Do things that inspire you and take note of what you find out.</p>

<p>I start my mornings with a coffee and a walk through my neighborhood. one walk I saw the sun hitting the face of a building. It looked interesting. Gut feeling. I liked the way the light hit it. I put down my coffee mug and took a photo:</p>

<Image
  src="/images/how_does_art_happen/building.jpg" // Route of the image file
  layout="intrinsic"
  height={281} // Desired size with correct aspect ratio
  width={500} // Desired size with correct aspect ratio
  alt=""
/>

<p>I also jotted down a drawing in my notebook. I had a feeling I wanted to make a sketch of this, so I drew an idea of what it could look like.</p>

<Image
  src="/images/how_does_art_happen/notebook01.jpg" // Route of the image file
  layout="intrinsic"
  height={500} // Desired size with correct aspect ratio
  width={340} // Desired size with correct aspect ratio
  alt=""
/>

<p>When I got back inside I watched some videos about Japanese calligraphy. Japanese culture fascinates me. They've managed to build a society that is rich, technologically advanced, yet without many of the problems that  Western countries have. Corruption and crime are lower, people are healthier, there's a stronger sense of community, no shootings, no wars. Much of the tech we use is Japanese. They've also created culture that is consumed all over the world. And who didn't dress up as a ninja or samurai for Halloween at some point?</p>

<p>I wanted to learn more about it. I wanted understand what beliefs they hold that their society is based around.</p>

<p>Calligraphy gives a window into those beliefs. Being present, and letting go, and creating for its own sake are key parts of making good calligraphy. The Japanese are the original minimalists. They placing a high value on space, and not trying to do too much. They don't try to fill up the canvas. They let each element breathe, giving it room to express itself.</p>

<h4>Creation</h4>


<p>I took all those influences and started coding.</p>

<p>I began by making some more sketches of what the piece could look like. Here are a couple of pages of them:</p>

<Image
  src="/images/how_does_art_happen/notebook02.jpg" // Route of the image file
  layout="intrinsic"
  height={500} // Desired size with correct aspect ratio
  width={374} // Desired size with correct aspect ratio
  alt=""
/>

<Image
  src="/images/how_does_art_happen/notebook03.jpg" // Route of the image file
  layout="intrinsic"
  height={500} // Desired size with correct aspect ratio
  width={361} // Desired size with correct aspect ratio
  alt=""
/>

<p>I made the sketch using Quil, an implementation of the Processing framework in Clojure. I'd been interested in learning a functional programming language. Using it to make sketches gave me an easy introduction, and the motivation to keep using it.</p>

<p>Here's the result:</p>

<Image
  src="/images/how_does_art_happen/sketch.jpg" // Route of the image file
  layout="intrinsic"
  height={500} // Desired size with correct aspect ratio
  width={500} // Desired size with correct aspect ratio
  alt=""
/>

<p>All the sketch is is simple shapes, lie rectangles and a circle. The areas I focused on were the positioning and color of the elements.
I mimicked the sun rising and hitting the front of the building.</p>

<p>The idea I want to communicate is to contrast the movement of the sun, and the stillness of the building. At the same time, I want to show that both the sun and the building change.</p>

<p>When you think about it, it looks like the sun moves and the building stays stationary. However, over the long haul, the building will be destroyed. However, the sun will stay rising and setting, as it has done for thousands of years. But even then, even the sun is changing in position and composition. It too will die someday. Nothing really stays still, even though it may look like that.</p>

<p>I tried to keep a lot of space in the sketch, and use colors that evoked the feeling of a morning sunrise in Santiago.</p>

<h4>Takeaways</h4>

<p>What can you do to reliably turn your experiences into creations?</p>

<h5>Walk</h5>


<p>Creatives have long understood the power of walking, making it an integral part of their routine. Your brain kicks into a higher gear when you move. It mulls over problems subconsciously, so solutions can appear later. You can observe your surroundings and get ideas for projects.</p>

<p>It's also good for the body, and lots of fun!</p>
<h5>Carry a notebook</h5>


<p>Everywhere I go I keep a notebook with me. Inspiration and ideas come at random times. You need a way to store those insights so you can retrieve them later. I recommend a notebook instead of a phone, but do what works best for you. Phones take a long time to get out, unlock, navigate to the right app, just to jot down something. A notebook is a lot faster to use. In addition, you have more tactile control over what you can record. You're not limited to the phone screen and whatever features the phone allows you to have.</p>

<p>Finally, if you're in a city, you might not want to use your phone in public. Someone could snatch it. The funny thing is that nobody wants to take a notebook even though, in the long term, the notebook is probably more valuable than the phone!</p>
<h5>Schedule creation time</h5>


<p>You need a regular way to turn those ideas, inspiration, and insights into something others can experience. This is basically what artists do. We make the intangible tangible. You need a regular time to create, ideally each day, but whatever your schedule can manage.</p>

<p>This might not be what's commonly defined as art, but any sort of creation is an art in its own way.</p>
<h5>Learn</h5>


<p>Learn as much as you can. The things you learn will in one way or another end up in your art.</p>

<h5>Refine</h5>


<p>The first draft is never the best one. Once you get your ideas out there, you can see how they work. Odds are you'll want to make changes. I adjusted the size of the circles, the size of the rectangles, the colors, and the positions. I did this until I got a version I was happy with.</p>

<p>I probably won't put this on my Etsy account or consider this one of my best sketches. Even though, it helped me explore ideas, learn about colors, and try new techniques. This is the case for all creatives. For every song a musician puts on an album, they've made dozens, if not hundreds, of others that are never released to the public. Painters make thousands of paintings, but are known for just a handful. You have to create a lot to uncover the few works that stand out.</p>

<h4>In conclusion</h4>
<p>Using my example, You'll have an idea of how to turn your experiences into artwork.</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
