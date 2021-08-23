import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MyHeader from '../../components/MyHeader'
export default function TheCoolestThingAboutLivingAbroad() {
  return (
    <>
    <MyHeader />

      <article>
        <h2>The coolest thing about living abroad</h2>
        <h3>Created 15 October 2018</h3>
        <h3>Updated 8 May 2021</h3>
        <p>The coolest thing about living abroad is the perspective that it brings. People who live abroad get to see the world in a completely different way. They get a perspective that very few people get to experience</p>

<p>It’s like you’re in a no-man’s land. In the foreign country where you’re living, you’re part of its society but you’re also apart from it. You go to their grocery stores, ride their buses, interact with their people, and date their women. Through these interactions, you slowly integrate yourself into that country. But, at a moment’s notice, you can step out. You can retreat to an apartment or bar with your fellow countrymen, or foreigners from others places and create your own bubble, isolated from the rest of the people. You can laugh and complain about how things are done here. You can compare society to those in your homelands.</p>

<p>When you live abroad, the distance from your native country makes you see it differently. When you create something, it’s good to step away from the project for a bit because it gives you new ideas on how to improve it, and helps you spot mistakes that were previously invisible to you. The distance provides perspective. Similarly, when you live outside of your native country, you get new ideas on how to improve it and spot mistakes in it that you previously couldn’t see. Things that seemed normal now seem not-so-normal. Things that you took for granted you no longer do. You experience things that are better than in your home country and wonder why it can’t be like that there.</p>

<p>The knowledge you get provides a point of view that people who haven’t done extended stays abroad, or maybe have never even travelled abroad, can’t appreciate. It puts distance between you and your compatriots.</p>

<p>I think that ability, the ability to move in and out of different worlds is what makes travel so cool. It’s what makes the experiences of those people who spend extended periods of time abroad seem interesting to others.</p>

<Image
  src="/images/the-coolest-thing-about-living-abroad/no_mans_land.png" // Route of the image file
  layout="intrinsic"
  height={362} // Desired size with correct aspect ratio
  width={750} // Desired size with correct aspect ratio
  alt=""
/>


      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
