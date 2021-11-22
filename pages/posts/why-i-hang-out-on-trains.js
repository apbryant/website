import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function WhyIHangOutOnTrains() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Why I hang out on trains</h2>
        <h3>22 November 2021</h3>

<Image
            src="/images/why-i-hang-out-on-trains/ba_trip_acoyte_subway_diagonal.jpg" // Route of the image file
            layout="intrinsic"
            height={750} // Desired size with correct aspect ratio
            width={1000} // Desired size with correct aspect ratio
            alt=""
          />
       <p>I love trains and walking. I walk and/or take the train even when I could drive somewhere. For international readers, know that this is kind of weird in the United States. People drive everywhere here. I enjoy it, though. It makes my life better.</p>

<p>Walking is a great habit. Creatives all have walking habits. I get inspiration and work through ideas that end up being realized in my work. Plus, I get some exercise. We're made to walk. I get it in for free, as a natural bonus for living well, instead of needing to make time to do more exercise.</p>

<p>Another benefit is I get to better know where I live. The changing of the leaves, new buildings, the people, all make up the landscape. You notice the details of a place and feel more connected to it.</p>

<p>Public transit and walking is often slower on the frontend. But that's a blessing. It's a great filter for your activities. Do you really want to do something enough to take the time to travel there? You can't pretend to "have it all" by zipping from here to there, only to find yourself burnt out and overtaxed at the end. In addition, you save money on the backend by not having to pay to operate a car.</p>

<p>Another benefit I get, and maybe others do too, is I can't really read stuff on trains. Looking at something brings on motion sickness. Phone scrolling isn't an option for me. This means I can't do much besides turn into a sort of stationary flâneur, quietly observing my surroundings. In short, I can think. I get a brief respite from the demands of life. You can't do anything. The train will get there when it does. I can't drive faster to try and shave a few minutes off my travel time. I'm forced to accept the moment, to relax in it. I used to listen to music on rides, but I've given this up. It's turned out well for me. One fewer distraction.</p>

<p>Train stations are beautiful. They're unique, timeless structures that reflect the character of their place. Even if they were made a hundred years ago they still look good today. Each archway and column connects you to a sense of the classic. Subway stations are also beautiful. While the stations in a subway system share design and architectural features, each one keeps its individuality. Even when you don't enter a train or subway station, you can still enjoy them from the outside. They're works of art that are available for anyone around to enjoy.</p>

<p>Walking and riding trains make for a happier, healthier, wealthier, and wiser life. Plus, it's lots of fun. How could you go wrong?</p>







      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
