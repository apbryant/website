import Head from 'next/head'
import Link from 'next/link'

import MyHeader from '../../components/MyHeader'
export default function WeKnowWhatToDo() {
  return (
    <>
    <MyHeader />

      <article>
        <h2>Doing vs. making</h2>
        <h3>12 July 2019</h3>
        <p>Most things in life aren’t that complicated. When we have a problem we know, deep down, what we need to do. The issue is that a lot of times, we just don’t want to do it.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
