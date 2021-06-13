import Head from 'next/head'
import Link from 'next/link'

export default function CV() {
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
      <main>
      <h1>Lazarillo, Full Stack Developer, January 2021 - Present</h1>
      <ul>
        <li>Implement UI changes to the platform's iOS and Angular web applications to improve the platform's accessibility and performance.</li>
        <li>Optimize and monitor server costs and performance.</li>
      </ul>
      <h1>ZTZ Tech Group</h1>
      <h2>Operations Manager, August 2019 - November 2020</h2>
      <ul>
        <li>Implemented  sales pipeline with LinkedIn and Activecampaign, which led to a new client, several free trials of the product, and tens of thousands of dollars from  existing clients and programs entering the company.</li>
        <li>Developed and implemented content marketing strategy, which resulted in over two-dozen articles on the company website and LinkedIn.</li>
        <li>Led team of five interns, providing leadership and professional development. Under my guidance one intern doubled the amount of sales contacts sent and sales meetings scheduled. Another pair of interns each published in-depth articles about the Chilean consumer  complaints markets at a rate of one per week.</li>
      </ul>
      <h2>Full Stack Developer, July 2017 - August 2019</h2>
      <p>Created and implemented key parts of the company’s product, software for creating documents inside of legal and customer service organizations, including:</p>
      <ul>
        <li>A text classification algorithm using Python and ASP.NET to classify user documents</li>
        <li>An algorithm using C# to combine sections of multiple documents into one based on user input</li>
        <li>Dashboards using ASP.NET and JavaScript to help users understand their data and the systems they represent</li>
      </ul>
      <h1>Art projects</h1>
      <ul>
        <li><a href="https://apbryant.github.io/mapocho/index.html">Mapocho</a>: An exploration of our connection to rivers. Supported with generative artwork based on photos of the Mapocho River in Santiago. 2021.</li>
        <li><a href="https://gum.co/pJKvHJ">How I Made It</a>: E-book sharing code & explanations of my generative artwork. 2021.</li>
        <li><a href="https://gum.co/CgiVzv">Photography, Creative Coding, & the Copy Function</a>: E-book explaining how to make photo-based generative artwork. 2020.</li>
      </ul>

      <h1>Press</h1>
      <ul>
        <li><a href="https://www.artsyshark.com/2021/05/26/what-is-creative-coding/">Artsy Shark - What Is creative coding?</a></li>
        <li><a href="https://www.iltanet.org/blogs/ignacio-raffa1/2020/10/07/efficiency-and-automation-in-legal-tech">International Legal Technology Association - Efficiency and Automation in Legal Tech</a></li>
        <li><a href="https://fullstackheroes.com/interviews/andrew-bryant/">Full Stack Heroes - Interview</a></li>
      </ul>

      <h1>Education & Certificates</h1>
      <ul>
        <li>Udacity, Data Analyst Nanodegree, 2017</li>
        <li>William and Mary, BA Economics, 2015</li>
      </ul>
      </main>

            <footer>
                © Andrew Bryant
            </footer>
            <style jsx>{`
        main {
          margin-left: 20%;
          margin-right: 20%;
        }
      `}</style>
    </>
  )
}
