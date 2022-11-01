import Head from 'next/head'
import Link from 'next/link'

import MyHeader from '../../components/MyHeader'
export default function WhyWeDontBuild() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Why we don't build</h2>
        <h3>26 April 2020</h3>
        <p>To comment on Mark Andreessen's awesome essay on <a href="https://slack-redir.net/link?url=https%3A%2F%2Fa16z.com%2F2020%2F04%2F18%2Fits-time-to-build%2F">building</a>, here are some reasons why I think we (by "we" I mean Western society in general) have decided not to build:</p>
        <ul>
        <li>
        Risk: When you build something, you have your name attached to it. If it doesn't work out, you're held accountable. This can be quite unpleasant, so we've decided to avoid risk.
        </li>
        <li>
        Difficulty: It's easier just to play along in the current system instead of trying to make things better, especially if the status quo is relatively profitable for those involved.
        </li>
        <li>
        Dirty: Making stuff involves trial and error, false starts, and tons of frustration. In addition, to make physical stuff, you generally have to get physically dirty. That is something society has decided to avoid as much as possible.
        </li>
        <li>
        Low prestige: With the possible exception of programmers and designers, society places people who make stuff for a living lower on the social hierarchy than those who don't.
        </li>
        </ul>
        <p>
        To reverse this, one of the things we'll have to do is we'll have to change our cultural narrative to make those who build "cooler" than those who don't. Cultural pressure is real. High school students aspire to go to college, and college students aspire to go into finance and management consulting because that's what's expected of them, and that's where the prestige lies. What if we expected people to become builders instead?
        </p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
