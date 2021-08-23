import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'

export default function AreWeReallyLessHappy() {
  return (
    <>
      <MyHeader />

      <article>
        <h2>Are we really less happy?</h2>
        <h3>16 September 2017</h3>
        <p>I know, I know…every day it seems like the world is going to hell in a handbasket. But has the turmoil affected how happy we are? How does your country fare?</p>

<p>I wanted to find out, so I got the World Happiness Report’s data from their 2015, 2016, and 2017 reports and created a chart of the net change in a country’s happiness as measured by the World Happiness Report during this time period.</p>

<p>Check it out: <a href="http://bl.ocks.org/apbryant/3198d3c73cbc381c148725a1e62381be">http://bl.ocks.org/apbryant/3198d3c73cbc381c148725a1e62381be</a></p>


      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
