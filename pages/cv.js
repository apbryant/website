import Head from 'next/head'
import Link from 'next/link'
import HeaderLinks from '../components/HeaderLinks'


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

    <Link href="/posts/first-post">
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
      <h1>Summary</h1>
      <p>Full stack developer for Latin American startups.</p>
      <h1>Lazarillo, Full Stack Developer, January 2021 - Present</h1>
      <ul>
        <li>Implement UI changes to the platform's iOS and web applications to improve the platform's accessibility and performance.</li>
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
      <h1>Tech stack</h1>
      <ul>
        <li>Languages: Typescript, Swift, C#, Python, R, Clojure, Markdown, HTML, CSS, JavaScript, Processing, GLSL</li>
        <li>Frameworks: Rx, ASP.NET, Angular</li>
        <li> Technologies: Azure, Git, SVN, Selenium</li>
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
    </>
  )
}
