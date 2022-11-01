import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MyHeader from '../../components/MyHeader'

export default function OldIsNew() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Old is new</h2>
        <h3>01 November 2022</h3>

        <Image
                src="/images/old-is-new/image.png" // Route of the image file
                    layout="intrinsic"
                    height={500} // Desired size with correct aspect ratio
                    width={333} // Desired size with correct aspect ratio
                    alt=""
                  />

        <p>Generative art can seem like a new, flashy art form. But within the space of computers, it's been around for a while. The first works of computer generated art were created back in the 1960s by Georg Nees. Artists have been creating using computer code as a medium ever since.</p>

<p>Before computers, people used logic and math for esoteric ends for millennia, going back to <a href="https://cdixon.org/2017/02/20/aristotle-computer">Aristotle</a>. Art is even older. The oldest piece of art that we know of is 73,000 years old.</p>

<p>This is part of creative coding’s appeal to me. By creating in this area, you're not skimming the surface, chasing ephemera that come and go. You learn and draw on knowledge from the foundations of nature, history, and culture.</p>

<p>The importance of older ideas and technologies is often overlooked. This is because we overweight the relevance of new things and underweight that of old ones. The world is an unpredictable place. A small change in the zeitgeist or environment can render a popular idea useless. If something is still with us, there's a reason why.</p>

<p>It's good to try new things to keep stagnation from creeping in. Life changes, you change, so it's necessary to adapt. It’s important to keep the new in its proper context, though.</p>

<p>I learned about this from Nassim Taleb's Lindy Effect in his book <i>Antifragile: Things That Gain from Disorder</i>. On average, an idea or technology's remaining lifespan grows as its age increases. Events wipe out ideas and technologies all the time. One that's still with us has demonstrated an ability to survive, making it more likely to survive into the future. Under this idea a best-selling book from this year will likely only be widely read for another year. But <i>The Odyssey</i> will probably be widely read for thousands of years to come.</p>

<p>To illustrate the point, Taleb walks through the technologies used during an at a restaurant. The tools used in that experience, from the shoes worn to the utensils used, haven’t meaningfully changed since they’ve been around. An ancient Roman cook could walk into a modern kitchen and make a meal without much trouble.</p>

<p>The chapter titled "Thing 4: The washing machine has changed the world more than the internet has", in the book <i>23 Things They Don't Tell You About Capitalism</i> by Ha-Joon Chang, makes a similar point. Comparing the internet to the washing machine and telegraph, he makes the case that these devices have had a far larger impact on society. Without the washing machine and other appliances, women wouldn’t have been able to participate in broader society as they do now. The telegraph reduced the time needed for long distance communications from weeks to minutes, whereas the internet only did from minutes to seconds. However, we systematically over-value the impact of new technology because we, as humans, are biased to pay more attention to new things.</p>

<p>In art, programming, and elsewhere, the basic ideas dominate.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
