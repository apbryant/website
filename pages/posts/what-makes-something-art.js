import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MyHeader from '../../components/MyHeader'
export default function WhatMakesSomethingArt() {
  return (
    <>
        <MyHeader />

      <article>
        <h2>What makes something art?</h2>
        <h3>30 September 2021</h3>
        <p>What makes something art?</p>

        <p>I like to think I’m making art when I do creative coding, sitting down and make my laptop draw shapes on the screen.</p>

<p>The seed for this post was planted when I came across a <a href="https://erikhoel.substack.com/p/big-tech-is-replacing-human-artists">Substack post</a> about the rise of AI-generated art. It got me thinking, is what they’re making actually art, anyway?</p>

<p>My stab at answering this is the below matrix.</p>

<Image
    src="/images/what-makes-something-art/UNIQUENESS.png" // Route of the image file
  layout="intrinsic"
  height={500} // Desired size with correct aspect ratio
  width={411} // Desired size with correct aspect ratio
  alt=""
/>

<p>For something to be art, it needs to be unique, and it has to be a gift.</p>

<p>Uniqueness means that the object retains the character of those who created it. You need to know who is behind it. The object also needs to reflect where they were at both physically and emotionally.</p>

<p>Art also has to be a gift. This doesn’t mean it has to be free. Starving isn’t cool. But outside of any transaction there needs to be a sense that what was made was made for the joy of making it, and to share that joy with others.</p>

<p>The distinctions aren’t sharp. There are spectrums of uniqueness and gift-ness. Objects that aren’t art can be turned into art, and vice versa. It also depends on someone’s perception. It also depends on people’s perceptions. Something can be art to one person and not to another.</p>

<p>The other matrix squares are examples of things we make that have, or don’t have, uniqueness and gift-ness.</p>

<p>So, is the Google’s and Microsoft’s artificial intelligence making art? For the computer scientists who made it, it is. Programming computers is an art form. They people involved in the project love their craft. They also mean well; they want to express themselves and explore what computers can do.</p>

<p>Once Google begins stamping these out, and the programs written take on a life of their own, and the art’s viewers become their unpaid AI trainers, they’ll lose the quality of being art. They’ll just be the outputs of machines without substance behind it.</p>

<p>Gresham’s law will come into force, the bad driving out the good. There will always be people who want art because of the emotional connection it brings, and the satisfaction that comes from knowing a person poured their energy into what was made. People with the right intentions will seek out information about art’s origins, as they do with physical goods. Those who buy AI art expecting the same effect will know something is off.</p>

<p>But, AI art will saturate the market, because it's cheaper and more profitable to make than the real kind. We’ll see them more. Furthermore, we won’t know whether they’re real or not because, at a glance, you won’t be able to tell. Regardless, the impressions that the AI art make will influence the decisions we make, nudging them in the direction Big Tech deems suitable to their interests.</p>

<p>Our baseline assumption has been that if you see art, a real person made it. That assumption is no longer valid. When you browse the internet or, even worse, read the comments, you assume that someone created what you see. You might question their integrity, but you at least think it was a person. When you see a photo or video, you think that the people in them are real. But once you know that AI may be creating what you consume, there’s no turning back. The world becomes a less hospitable place.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
