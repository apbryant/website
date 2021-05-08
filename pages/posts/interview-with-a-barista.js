import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function InterviewWithABarista() {
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
        <h2>Interview with a barista!</h2>
        <h3>Created 8 June 2019</h3>
        <h3>Updated 8 May 2021</h3>

        <Image
          src="/images/barista-interview/20190605_190501.jpeg" // Route of the image file
          layout="intrinsic"
          height={1333} // Desired size with correct aspect ratio
          width={750} // Desired size with correct aspect ratio
          alt=""
        />
        <p>I'd been a consumer of specialty coffee for years. But one day I wondered, who are the people who serve me? Every time I go in for some more beans, or a cup of freshly-made specialty coffee, someone helps give me what I want. What's their story? Well, to start answering that question I went down to Bloom Specialty Coffee in Santiago, Chile and spoke to one of their baristas, Jorge. Below is a summary of our interview:</p>

  <p>For Jorge, specialty coffee was love at first sight. In his previous career, Jorge worked as a bartender at a bar that also had cafeteria. One day, a barista came in with specialty coffee. He sold the bar some, and showed Jorge methods for making filtered coffee. From that moment he grew interested in the world of specialty coffee, ultimately deciding to change from being a bartender to being a barista.</p>

  <p>Not everyone the idea of "specialty coffee" in their minds. To most, there's just "coffee"; the coffee that can be had at a convenience store or at a restaurant after a meal. But for specialty coffee drinkers, coffee is part of a broader experience. It's a world where you can of sitting down with a great coffee that accompanies you in whatever you do, whether that's having a business meeting, conversing with friend, or spending a moment with a good book.</p>

  <p>It's an interesting time to be drinking specialty coffee in Chile. We should count ourselves lucky to be here! The industry is relatively new; specialty coffee has only been in Chile for about four years, and has limited reach outside Santiago.</p>

  <p>His favorite things to make are brews. So the next time you stop by Bloom, ask him for un "café filtrado"!</p>

  <p>The café is located at the intersection of Merced and Lastarria in downtown Santiago. It’s open 8:00-20:00 on weekdays and 10:00-20:00 on weekends.</p>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3341.0259916068317!2d-70.64350944439025!3d-33.43713953276271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef4ecb421d561b72!2sBloom%20Specialty%20Coffee!5e0!3m2!1sen!2sus!4v1620487688342!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

<a href="https://drive.google.com/file/d/1XLRrLV8cAkoFZfh_jjuCngjkyu14bwIT/view?usp=sharing">Link to interview (in Spanish)</a>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
