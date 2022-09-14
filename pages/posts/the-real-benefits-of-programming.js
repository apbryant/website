import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function TheRealBenefitsOfProgramming() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>The real benefits of programming</h2>
        <h3>14 September 2022</h3>

<Image
            src="/images/the-real-benefits-of-programming/sketch.png" // Route of the image file
            layout="intrinsic"
            height={600} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt=""
          />
<p>The greatest benefits of programming computers come not from the products made or the renumeration received, but who you become as a result of programming.</p>

<p>When you read through an existing program you can’t just skim through it. You have to become an attentive reader so you can deeply understand the part of the program you want to change. Writing out instructions to the computer helps you better order your thoughts when writing natural language.</p>

<p>Programming, at its core, involves manipulating numbers. As you learn how to work with numbers your math skills improve. Different areas of programming introduce you to areas of math you otherwise wouldn’t use. If you want to code a video game modeled on the real world, you need to understand some physics to recreate the way things move in your program. In data science linear algebra provides important knowledge for the processing and analysis of data. I use a lot of geometry when making generative artwork.</p>

<p>Programming is about problem solving. You learn the process of problem solving and how to keep your emotions in check when doing so. You have to account for failures and rare scenarios so that the program works when they happen. You have to take into account the effects of scale so that the program works when lots of people use the programs you write. This helps you become a more rigorous and creative thinker.</p>

<p>Learning what makes good code good refines your taste, so you better appreciate well-made things in other areas.</p>

<p>Through programming you learn how to focus and come to understand its importance. You learn that you need to focus singlehandedly on that task ahead of you to get the best results. You have to prioritize it, as your work depends on it.</p>

<p>Every aspect of our lives is affected by computers. We spend a lot of our time working and playing using computers as a tool. Knowing how to program one gives you a glimpse of how the sausage is made. You get a behind-the-scenes look at how the devices that power our lives work. Programming one gives you the confidence you can create tools with them, adding your ideas to the evolution of software and building its future.</p>

<p>Not everybody needs to be a professional programmer, but I think most people would benefit from including programming in their education. It’s just like you benefit from knowing how to cook even if you’re not a chef, or knowing how to write even if you’re not a professional writer. Its benefits can make people better colleagues, friends, and citizens. What’s not to like?</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
