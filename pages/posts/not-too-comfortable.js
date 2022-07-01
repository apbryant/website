import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function NotTooComforatble() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Not too comfortable</h2>
        <h3>01 July 2022</h3>

<Image
            src="/images/not-too-comfortable/trains.jpg" // Route of the image file
            layout="intrinsic"
            height={422} // Desired size with correct aspect ratio
            width={750} // Desired size with correct aspect ratio
            alt=""
          />


          <p>There's no feeling like when you first sit down on a train or plane after boarding. You've rushed and stressed to get to this point. Now, your job is done, at least for a little bit. You can let your legs rest and your mind go.</p>

          <p>On longer-distance trains you can walk to the café car and get something to eat or drink. On planes, they even bring it to you. How cool is that?</p>

          <p>The environment comforts you. It understands you and what you've gone through. And it wants to support you on your journey.</p>

          <p>Yet, it's not too comfortable. You can't lounge in them like you would on a bed or a couch at home. Travel sleep leaves something to be desired in the best of circumstances.</p>

          <p>You're cramped. The lights don't illuminate the way but stare at you, making you question the choices that led you into this machine in the first place. The person seated next to you is smelly, or loud, or takes up some of your seat. Or maybe they just look weird.</p>

          <p>The attendants thinly conceal their impatience underneath their pleasantries. They have a job to do. You're nothing more than a task to be checked off, and the sooner the better.</p>

          <p>The coffee is weak and bitter. The food, tasteless and under-nourishing.</p>

          <p>This environment demands something of you. They don't make it too easy, You have to bring something to the table to make this trip go smoothly for everyone involved. It's a chance for you to show the character you've spent your life developing.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
