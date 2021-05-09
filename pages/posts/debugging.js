import Head from 'next/head'
import Link from 'next/link'


export default function Debugging() {
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
        <h2>Debugging</h2>
        <h3>16 September 2017</h3>
        <p>Coding is debugging.</p>



<p>One thing I’ve learned since starting to program is that you spend a lot of time trying to fix your code when it breaks.</p>



<p>Of clutching your head, shaking your fist and swearing profusely.</p>



<p>Of imagining yourself bashing your laptop (or your head) against the table.</p>



<p>Of wondering why you started doing this in the first place.</p>



<p>It’s frustrating. But it’s part of the process.</p>



<p>While being light-years away from being an expert, I’ve gotten better at fixing my errors.</p>



<p>When I get an error in a program I try to understand what exactly the error message is saying. They can be pretty cryptic, but I try and get the message’s meaning as best I can.</p>



<p>I re-check the basic stuff…is the package imported? (Probably not.)</p>



<p>Did I use the right type of variable? (Oh, right. No.)</p>



<p>Are the files in the right place? (Nope.)</p>



<p>Did I forget a semicolon or use improper indentation? (Yup.)</p>



<p>Is something misspelled? (That too.)</p>



<p>Getting the fundamentals right takes care of a large chunk of my errors.</p>



<p>I read the documentation of the function or method in question to see how it’s supposed to be used.</p>



<p>I paste the error message into Google or Stack Overflow to see what others in my situation have done. Sometimes I find a decent answer but many times I wonder what these people are saying and why can’t they just solve the problem using plain English instead of technobabble bullshit.</p>



<p>I try to move forward in the smallest way possible. Sometimes, that could just be printing content to the screen. Any content. Once you get something up there you can work on getting the right thing printed.</p>





<p>When all else fails…I ask someone. I’ve been fortunate to have access to great programmers who know a hundred times more than me. People who will entertain my dumb questions and help me get better.</p>



<p>It’s worth taking the time to develop these relationships, and not just for the short-term problem-fix. Programming can be a dark and lonely road of early mornings and late nights. Of losing free time and turning down social events to work or study. These people bring a little bit of light onto that journey.</p>


      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
