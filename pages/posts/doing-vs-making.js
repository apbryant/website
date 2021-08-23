import Head from 'next/head'
import Link from 'next/link'

import MyHeader from '../../components/MyHeader'
export default function DoingVsMaking() {
  return (
    <>
      <MyHeader />

      <article>
        <h2>Doing vs. making</h2>
        <h3>1 January 2020</h3>
        <p>There’s a difference in “doing” vs “making”.</p>

  <p>Making means producing. Making means creating. Making means bringing something into the world that wasn’t there before. Making means being original. Things can be done following instructions and copying. When I wrote that interesting people follow their interests and make things, it truly does mean that they make things things the world hasn’t seen before.</p>

  <p>When people introduce themselves at a party, a better question than “what do you do?” could be “what do you make?”</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
