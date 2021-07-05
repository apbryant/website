import Head from 'next/head'
import Link from 'next/link'


export default function NlpInSpanish() {
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
        <h2>NLP in Spanish</h2>
        <h3>Created 19 June 2021</h3>
        <h3>Updated 5 July 2021</h3>


        <p>Natural language processing (abbreviated as NLP) is using software to work with natural languages. Tools are plentiful, however many NLP tools default to English. Meaning that, if you want to work with Spanish text, there are some things to keep in mind and do differently.</p>

<h2>Character encoding</h2>

<p>First things first, when working with text, you want to make sure that you’re reading in your file using UTF-8 encoding. Programs reading text might take ASCII formatting as a default. ASCII stands for American Standard Code for Information Interchange. Because it’s the American standard, it uses only English characters, numbers, and symbols needed for computing. Other characters aren’t included. If you read a Spanish text using ASCII encoding, you’ll likely get an error message from unrecognized characters like accents and upside-down question marks. Python 3 uses UTF-8 encoding by default, but in another language the encoding may need to be set explicitly.</p>

<h2>Accents</h2>

<p>Unlike English, accents are an important part of the Spanish language. They give guidance as to how a word should be pronounced. They also distinguish two words that are otherwise pronounced the same. An example is “el” (the) and “él” (he).</p>

<p>There’s also an ñ, which is actually considered a separate letter in the Spanish alphabet. It’s pronounced like the ny in the word canyon. There’s also an ü, which says to pronounce the “u” when it would otherwise be silent.</p>

<p>These can mess with NLP algorithms. People often write words without accents that should have them. This can mess with analysis such as word counts, and word/sentence similarity algorithms like Jaccard similarity or Levenshtein distance.</p>

<p>A sentence like “El hombre alimentó el pingüino” (the man fed the penguin) would in an informal context sometimes be written as “El hombre alimento el pinguino”. Readers would use their intuition to understand the sentence even though, with a literal interpretation, the accent-less would be gibberish.</p>

<p>It’s best to strip accented letters á, é, í, ó, ú, and ü from words in a pre-processing step.</p>

<p>Note that you don’t have to strip the ñ. It’s considered a separate letter, and thus has its own key in Spanish keyboards. It’s to the right of the “L”, where the colon and semicolon are on English keyboards. As such, you don’t need to memorize any keyboard shortcuts to type it. </p>

<h2>Stopwords</h2>

<p>An important step is to take out stopwords. Stopwords are the “filler words” of a language that don’t convey much information, but support the words that do. These are words like “the”, “a”, “an”, and “and” in English. Nltk, a Python package of NLP tools, has a list of Spanish stopwords that fill the same role. Using this, it’s a straightforward process to remove them. All you have to do is specify the language to use when downloading the stopwords to your program.</p>

<h2>Where to go from here</h2>

<p>This post was a bit Python heavy, because Python has the best ecosystem of packages for NLP. If undergoing an NLP project, working in Python is a safe bet. You can use a package like SpaCy to analyze the semantics of the text, picking out its nouns, verbs, adjectives, and so on. You can visualize your results using matplotlib or another graphing library. You can use a chatbot to create human-computer interactions. The sky's the limit. The principles of character encoding, removing accents, and filtering stopwords can be applied well in many other languages, though.</p>

<p>Spanish is the language with the second highest number of native speakers. It’s spoken on multiple continents and has a rich body of culture to enjoy. Furthermore, the tech ecosystem in Latin America is coming into its own. Knowing how to work with text in Spanish will allow developers to contribute to this community, allowing applications to solve problems with NLP previously left unsolved.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>

            <style jsx>{`
        code {

          text-align:left;
        }
        div{
          text-align:center;
        }
      `}</style>
    </>
  )
}
