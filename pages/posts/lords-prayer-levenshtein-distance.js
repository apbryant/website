import Head from 'next/head'
import Link from 'next/link'

import MyHeader from '../../components/MyHeader'
export default function LordsPrayerLevenshteinDistance() {
  return (
    <>
    <MyHeader />


      <article>
        <h2>From the vault: Levenshtein distance analysis of the Lord's prayer in different languages</h2>
        <h3>12 November 2020</h3>

        <p>I almost forgot about this project.</p>

        <p>I enjoy nerding out about languages, learning about their histories, similarities, and differences. I decided to analyze the Levenshtein distance, or how many letters apart one string is from another, of the Lord’s prayer in different languages.</p>

        <p>If you like .ipynb files, heatmaps, and pandas you’ll love this project!</p>

        <a href="https://github.com/apbryant/projects/blob/master/lords_prayer_languages/Lord's%20Prayer%20Levenshtein%20Distance%20Report.ipynb">https://github.com/apbryant/projects/blob/master/lords_prayer_languages/Lord's%20Prayer%20Levenshtein%20Distance%20Report.ipynb</a>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
