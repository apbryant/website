import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'

export default function FullStackHeroesInterview() {
  return (
    <>
      <MyHeader />


      <article>
        <h2>Full Stack Heroes interview</h2>
        <h3>19 May 2020</h3>
        <p>I was interviewed by Kris Bogdanov for his site Full Stack Heroes. I shared my experiences and learnings from being a developer. You can check it out here: https://fullstackheroes.com/interviews/andrew-bryant</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
