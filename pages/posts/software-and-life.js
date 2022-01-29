import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function SoftwareAndLife() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Software and life</h2>
        <h3>29 January 2022</h3>

<Image
            src="/images/software-life/valdivia-02.png" // Route of the image file
            layout="intrinsic"
            height={378} // Desired size with correct aspect ratio
            width={504} // Desired size with correct aspect ratio
            alt=""
          />

<p>After years of working as a software developer, I've noticed some similarities about how to make software that carry over outside the realm of ones and zeros.</p>

<h3>Protocols</h3>

<p>It's a good idea to take advantage of existing protocols for communicating with other programs. This ensures that your program’s messages can be received by other programs, and that their information can be received by yours.</p>

<p>We have standard ways of doing things within and across cultures so that everyone can get along. These are society's habits. First date, second date, couple, proposal (on one knee, with an expensive ring), marriage, children. Drinks, appetizer, main course, dessert. Greeting, small talk, real conversation, good-byes. Subject, verb, object.</p>

<p>It’s useful and fun to be able to do what you want on your own, but it can be confusing when you have to interact with others without using existing protocols. When all parties involved know what to expect during an interaction it makes things easier.</p>

<h3>Planning for the unexpected</h3>

<p>Software is built so that it works even when things don't go as you'd like. You plan for shit to hit the fan, so the software doesn't fail when it does. What if the disk is full? What if the network is down? What if data that isn’t formatted properly is passed into the program? Worse, what if malicious code is passed in?</p>

<p>These scenarios don't happen 99% of the time, but that doesn't mean that 1% when they do is an uncommon occurrence. And when they do happen and they’re not accounted for, they can be expensive to fix. You plan for abnormal events when you make software by building in functionality so that a program knows how to respond when something goes awry. That way, the service that software provides isn't interrupted any more than absolutely necessary.</p>

<p>The unexpected isn't so unexpected. Who hasn't been the victim of a crime, lost a job, had their property damaged, been seriously ill or injured, or had someone close to us die? Such is the price of living.</p>

<h3>Loose coupling</h3>

<p>One principle that comes up a lot when working on software is to keep different parts of an application loosely coupled. Coupling is the degree to which one part of a system is dependent on another. High coupling means high dependency.</p>

<p>Coupling isn't inherently bad. Generally speaking, though, programs work better when loosely coupled, so their parts can function independently of each other. This keeps changes in one from breaking another, and makes modifications easier to plan and execute.</p>

<p>Most entities work best when they can function independently of what happens outside of themselves. That's why having large entities (whether they're private or public) leads to system breakdowns. When too much is controlled under one roof, it becomes more difficult to respond to changes and solve problems. People lose the ability to act for themselves.</p>

<h3>Information brokers</h3>

<p>Loose coupling is important for communication. Sending messages directly between the sender and receiver can put a lot of strain on both parties. There's a reason executives had secretaries. Giving people direct access to them is detrimental to their performance. Knowing the exact whereabouts of an executive, and exactly how to reach them, is information that could easily be used against them. Also, if everyone can get in touch with them easily, everyone will, and they’ll quickly be overwhelmed with inputs. We feel so overwhelmed with information today because we fired our secretaries and told everyone how to contact us! Now, everyone has immediate access to us. And so, we’re flooded with info.</p>

<p>The secretary acts as a broker - someone who directs the flow of information between sender and receiver. They gather incoming communications, and deliver them to the boss at the boss' convenience. Within software programs, programs that act as brokers work similarly manage communications between programs, protecting all involved.</p>

<h3>Asynchronous communication</h3>

<p>Writing asynchronous programs allows parts of a program to run at different times. Suppose you have a website loads an image from another site that takes a long time to send the image. With code that runs synchronously, following the flow of instructions as written, all the code from your site that comes after the part where the image is loaded would be blocked from running until the image loading completes. From the perspective of the site's visitor, the site might load slowly or be unresponsive. But, if the code could execute asynchronously, different parts of the program could run outside of the regular flow. Code relying on the retrieval of the image could wait and run when the image arrives, while the rest of site's code that isn’t reliant on the image runs normally. This creates a better user experience.</p>

<p>It's important for people to have information when they want to access it. That convenience helps people coordinate better. Writing is so powerful because it enables asynchronous communication. You don't have to be in the same place at the same time as someone else to receive information from them. Other forms of communication like images and music help do the same thing. Even before recording technology, if a valuable piece of information was packaged into a story or song that anyone could remember and repeat, you’d get a form of asynchronous communication because the creator didn’t need to be there to share their creation. Anybody could do it.</p>

<p>The balancing act with people, however, is that we need synchronous communication to thrive. We need to have face-to-face conversations with others to be healthy. The key is to remember that not all communication has to be synchronous or asynchronous, and knowing when to use which.</p>

<h3>State management</h3>

<p>Managing a program's state, information stored within it, is one of the trickiest parts of writing programs. State is how a website remembers you were there on future visits so you don't have to log in again. State is how the ATM can tell you your bank account's balance when you ask for it. The more variables you have to keep track of in state, and the more programs have access to state, the most complicated and error-prone a program becomes.</p>

<p>Our state is the information we have to manage about ourselves and others. The more more balls you try to juggle, the more identities you ascribe to yourself, the buggier your life becomes.</p>

<h3>Testing</h3>

<p>In many companies when you write code for an application, you also have to write corresponding tests. Tests are side programs that run different parts of the main program to prove that they work. The application will also be tested by users to verify that everything works from their perspective.</p>

<p>Developers are skeptical of new code. It has to be put through its paces before trusting that it works as advertised. Many times revisions need to be made before everything works the right way.</p>

<p>Beliefs should be tested by others. Same with skills. To get stronger in the gym, you have to test your strength against the weights. To learn a language, you need to measure your progress against courses, or how comfortable you feel using it in the real world.</p>

<p>Companies need to be tested through competition in order to provide better products and services to customers, and states through elections.</p>

<p>Nobody does this all the time. We all have our opinions that we haven't examined, or hold despite evidence to the contrary. We also have opinions about things that can't be known for sure. But the more you're tested, the better you'll be.</p>

<h3>Wrapping up</h3>

<p>Of course, there are differences between people and computers. We have to eat and drink and sleep and use the bathroom. We have emotions that affect our decisions, whereas computers operate on logic. Our memories and powers of calculation pale in comparison to those of a computer's.</p>

<p>However, computers and the electricity that powers them are governed by the same laws of nature as we are. Also, software is made by humans within the context of human society, and all the idiosyncrasies and flaws that come with that. It's not surprising that there are similarities between how to make programs and how to make lives.</p>



      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
