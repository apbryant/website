import Head from 'next/head'
import Link from 'next/link'


export default function TheDifferentTypesOfRisks() {
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
        <h2>The different types of risks</h2>
        <h3>20 November 2019</h3>
        <p>When weighing the consequences of risks, we need to look at the balance of the costs of failure and the benefits of success. There are symmetric risks, where the downside costs and upside benefits are roughly equal, and asymmetric risks, where the costs and benefits are highly. Note that we often won’t be able to quantify exactly, or even roughly, what the costs and benefits will be, but we typically can figure out from experience, judgement, and intuition if the cost of something will be low or high, and likewise for the benefits.</p>

<p>Decisions with low risk and low reward are symmetric. These are the mundane, day-to-day decisions like what to eat and what to wear. We should give these decisions a minimum of consideration, in the sense that let’s not eat garbage or dress inappropriately. But above that baseline, we shouldn’t be thinking much about these things. There’s no huge upside if we get them right, and no huge downside if we get them wrong.</p>

<p>There are also symmetric risks with high downside and high upside. These are decisions where the downside is large. The upside is also large. The best example would be a soldier fighting in a war. The soldier may lose his life. But, he gets the enormous benefit of adulation from his community, plus the personal satisfaction of defending his nation from its enemies. I’d also put getting married into this category. Intertwining your life with another person in just about every aspect is a hugely risky decision. Some call it the most important decision you ever make. But, it’s a massively rewarding one if you get it right. With these, you want to choose very wisely. With these, it’s best to take your time and think through the decision before making it.</p>

<p>Low upside, high downside risks are asymmetric. They are what we call “stupid decisions” in everyday language. These are things like having unprotected sex, doing drugs, and getting into barfights. The upside is slight, but the downside is huge. Because of this, these risks are ones you want to stay away from.</p>

<p>The other type of asymmetric risks are ones with low downside and high upside. The classic example today is starting a startup, but many other personal and professional risks also fall into this category. If you fail, you lose time, money, and maybe other people’s money. You’ll also probably be embarrassed. But nobody dies, and nobody goes to jail. You’ll have the skills and contacts to find other opportunities. If structured properly, you can define and limit your downside. So, as long as you don’t risk more than you can afford to lose, the risks of failure really aren’t that bad. But the payoffs can be huge. A successful startup founder can make himself millions and even billions of dollars. If you take a job that’s outside of your comfort zone, you could get fired if you can’t hack it. If you can, though, you’ll be able to make yourself more money going forward, and have more professional opportunities open up to you.</p>

<p>Creative pursuits are also typically low downside and high upside. Just about everybody today can afford the tools to create, and has the time to do so. The only real risk is a bit of emotional discomfort. The benefits are huge, though. You get to express yourself. You get to learn new skills. You develop confidence and courage. If you stick with it for the long haul you may even get noticed and get paid for your work. These are the risks you should get in the habit of taking to grow.</p>



      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
