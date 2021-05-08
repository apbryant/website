import Head from 'next/head'
import Link from 'next/link'


export default function MyFitnessRoutine() {
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
        <h2>My fitness routine</h2>
        <h3>Created 14 November 2019</h3>
        <h3>Updated 8 May 2021</h3>
        <p>As the “fittest guy in ZTZ”, I’m the go-to guy in the company for health advice.</p>

  <p>Here’s what I do to keep myself in good shape. I am by no means a doctor or health professional, so take everything I say here with the necessary grains of salt.</p>

  <h4>Sleep</h4>

  <p>Sleep makes everything easier. It’s the closest thing to a “magic pill” that makes life easier and more fun. I get at least eight hours of sleep every night. The recommended amount of sleep for adults is 7-9 hours. I’m on the higher end. If I don’t sleep at least eight hours, I’m tired the following day.</p>

  <p>I avoid alcohol within an hour of bed. I also don’t have more than one drink a day, usually a glass of Cabernet Sauvignon with dinner.</p>

  <p>I love coffee, but I’m pretty sensitive to caffeine, so I can’t have more than one cup in the morning without having decreased quality of sleep</p>

  <p>Another thing I avoid is anything stimulating right before I go to bed. No email, no Netflix, no work, no heavy reading.</p>

  <h4>Food</h4>

  <p>The simplest and best advice on what to eat I’ve ever found is at the very beginning of Michael Pollan’s book In Defense Of Food: “Eat food. Not too much. Mostly plants.” Those three short sentences guide how I eat. The final two are self-explanatory, but the first is at first confusing. Eat food means to eat real food instead of “edible foodlike substances”, as Pollan calls them,  laden with heavily processed preservatives and chemicals, and lacking in nutrients. A good litmus test to gauge whether something that looks like food something is actually food or not is: could this have been made in the year 1700? If yes, it’s probably food. If no, it’s probably not food. 1700 is before heavily processed foods began to be made, and so just about everything people ate was real food. We, at that time, lacked the knowledge and ability to mass-produce “edible foodlike substances”.</p>

  <p>I drink tons of water, too, and limit myself to 1 cup of coffee in the morning. Two if I’m feeling tired. But no more.</p>

  <h4>Exercise</h4>

  <p>I walk a lot and get strenuous exercise several times a week. My exercise routines vary. Right now I do bodyweight exercises, MovNat mobility exercises, and parkour. I make sure to get outside every day, especially in the morning, to give myself exposure to natural light.</p>

  <h4>Putting it all together</h4>

  <p>Sleep, food, and exercise are like a three legged-stool. If one suffers, it affects the others. If I had to rank them in importance, I’d put sleep first, followed by food, and then exercise.</p>

  <p>That’s it! Like many things in life, I slip up, but this is how I live from day to day. Your mileage will vary if you decide to do anything I wrote. However, I think these are good principles to follow to have a good level of physical fitness.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
