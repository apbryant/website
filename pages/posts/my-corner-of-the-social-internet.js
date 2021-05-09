import Head from 'next/head'
import Link from 'next/link'


export default function MyCornerOfTheSocialInternet() {
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
        <h2>My corner of the Social Internet</h2>
        <h3>29 April 2018</h3>
        <p>I’m going to try something recommended by computer science professor and author Cal Newport.</p>



<p>I became a fan of his work after reading Deep Work. I credit him for the techniques that I learned that helped me learn a tough new skill, programming, and change career paths.</p>



<p>I followed his recommendation of quitting social media. After being a Facebook, Twitter, and Instagram user for years, I don’t use those services anymore.</p>



<p>He made another set of recommendations to allow people to leverage the benefits of connecting with important people/topics in a recent blog post about <a href="http://calnewport.com/blog/2018/03/25/beyond-deletefacebook-more-thoughts-on-embracing-the-social-internet-over-social-media/">embracing the Social Internet</a>.</p> 



<p>Social Internet is using the Internet to connect with people and share information. Social media are the media services provided by large technology companies. Social Internet adds value by allowing you to consume the information and connect to those that are important to you. Social media subtracts value by giving you sugar highs of emotionally stirring content without delivering anything of substance, just like eating pack of cookies feels good in the moment, but leaves you feeling like crap after.</p>



<p>Not to mention anything about any problems that exist related to privacy and handing over your data to large companies with which they can do what they want.</p>



<p>One of the ways that Newport suggests for people to get the benefits of sharing information on the Internet while minimizing its costs is to use your own website. Buy a domain name, set up a website, and share your content with the world there. If people really care about what you have to say, they can read what you put there, or subscribe to a newsletter or RSS feed to get information delivered to their inbox.</p>



<p>Well, that’s what I’m doing here. I set up this website as a place where I could share things without getting sucked into the time-wasting, energy-draining vortex of content that Twitter, Instagram and other social media products provide. I don’t know how much I’ll post, or about what, but I’ll put something up every now and then. If you need to reach me, or want to know what I’m up to (I don’t expect hardly anyone to want to), you can find me here.</p>



<p>Welcome to my corner of the Social Internet.</p>




      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
