import Head from 'next/head'
import Link from 'next/link'


export default function BackOnSocialMedia() {
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
        <h2>Back on social media</h2>
        <h3>22 May 2020</h3>
        <p>Nearly two years ago, I wrote an article where I proclaimed I was no longer using social media.</p>

<p>I totally went back on that.</p>

<p>After deleting my Facebook, Twitter, and Instagram accounts, I created another Facebook (now deleted) to join a photography group. I got back on Instagram and created a 500px account to practice photography. I don’t put any effort into photography anymore, but I might use it for creative inspiration.</p>

<p>I lurked on Twitter without an account, reading accounts I liked.</p>

<p>And now I’m tweeting.</p>

<p>After not using social media for a while, why am I back on it?</p>

<p>I have a better sense of what social media is for. I see it as less of a “do it because everybody else is on it”, and more of a tool to help me with a specific skill. When I wanted to do photography, I turned to social media to help me do that.</p>

<p>I want to learn how to build relationships online. I never learned how to do this before. With so many of our interactions going digital, connecting with others online is going to become more important. I think it’s a skill worth getting good at. Twitter gives me a training ground to do that.</p>

<p>I also think Twitter can also help me learn. Twitter has been key in helping me learn about coronavirus. There are tons of people saying interesting things on the platform. I want to expose myself to more of that. I’ll integrate what I learn into my map of how things work. Hopefully making it better.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
