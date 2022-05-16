import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../components/MyHeader'

export default function CV() {
  return (
    <>
    <MyHeader />
      <main>
      <h1>EBSCO Information Services, Software Engineer II - C#, November 2021 - present</h1>

      <p>I work on the team responsible for the LibraryAware product.</p>
      <h1>Lazarillo, Full Stack Developer, January 2021 - October 2021</h1>
      <ul>
        <li>Implemented UI changes to the platform's iOS and Angular web applications to improve the platform's accessibility and performance.</li>
        <li>Documented client APIs and integrated them into the application.</li>
        <li>Optimized and monitored server costs and performance.</li>
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

      <h1>Exhibitions</h1>
	<ul>
    <li><a href="https://www.crossroadsartcenter.com/">May 2022 All Media Show</a>, Honorable Mention, Crossroads Art Center, February 2022</li>
  <li><a href="https://www.bayschool-arts.com/pages/artspeaks">Art Speaks Juried Exhibition 2022</a>, Bay School Community Arts Center, April 2022</li>
  <li><a href="http://artspacegallery.org/2022/exhibits/all_media_march_april/">March/April Juried All Media Show</a>, Artspace, March 2022</li>
	<li><a href="https://www.crossroadsartcenter.com/collections/black-history-month-call-for-artists-and-online-exhibition">Black History Month</a>, Crossroads Art Center, February 2022</li>
	<li><a href="https://www.thewellartgallery.com/">Black History Now II</a>, The Well Art Gallery, February 2022</li>
	<li><a href="https://www.loosenart.com/blogs/magazine/environmental-alterations">Environmental Alterations</a>, Loosen Art, September 2021</li>
	</ul>
	<h1>Projects</h1>
      <ul>
	<li><a href="https://opensea.io/collection/teotihuacan-by-andrew-bryant">Teotihuacan</a>: NFT artwork collection with accompanying prints. 2022.</li>
        <li><a href="https://apbryant.github.io/mapocho/index.html">Mapocho</a>: An exploration of our connection to rivers. Supported with generative artwork based on photos of the Mapocho River in Santiago. 2021.</li>
        <li><a href="https://gum.co/CgiVzv">Photography, Creative Coding, & the Copy Function</a>: E-book explaining how to make photo-based generative artwork. 2021.</li>
        <li><a href="https://gum.co/pJKvHJ">How I Made It</a>: E-book sharing code & explanations of my generative artwork. 2020.</li>
        <li><a href="https://github.com/apbryant/projects/blob/master/lords_prayer_languages/Lord's%20Prayer%20Levenshtein%20Distance%20Report.ipynb">Lord’s Prayer Levenshtein Distance</a>: Report analyzing the Levenshtein distance of the words in the Lord’s Prayer in various Romance languages. 2019.</li>
      </ul>

      <h1>Press</h1>
      <ul>
        <li><a href="https://makemeaprogrammer.com/lessons-from-a-veteran-from-economics-to-software-engineering-with-andrew-bryant/">Make Me A Programmer - Lessons From a Veteran: From Economics to Software Engineering With Andrew Bryant</a></li>
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
          margin-left: 15%;
          margin-right: 15%;
        }
        div{
          text-align:center;
        }
      `}</style>

    </>
  )
}
