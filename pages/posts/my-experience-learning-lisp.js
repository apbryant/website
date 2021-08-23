import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'

export default function MyExperienceLearningLisp() {
  return (
    <>
  <MyHeader />

      <article>
        <h2>My experience learning Lisp</h2>
        <h3>17 May 2020</h3>
        <p>“I didn’t know programming could look like this.”</p>

<p>That was my recurring thought (when I wasn’t cursing to myself, that is) as I worked through <a href="https://www.cs.cmu.edu/~dst/LispBook/">Common Lisp: A Gentle Introduction to Symbolic Computation</a>.</p>

<p>I went from feeling like a decent programmer to feeling like an idiot. I literally felt like I was learning to program again from scratch. Which, in a sense, I was.</p>

<p>Even the basics are different. In Python, if you want to know the result of one plus two you write:</p>

<p>1 + 2</p>

<p>Easy! Just like you learned in elementary school.</p>

<p>Lisp uses prefix notation and encloses everything in parentheses. To add one and two you would write:</p>

<p>(+ 1 2)</p>

<p>WTF?</p>

<p>It had never occurred to me you could put the plus sign before the numbers to be added. I can’t count how many times I broke my code by forgetting to add a parentheses, or adding too many.</p>

<p>I have the faintest of understanding of why Lisp has been called the most powerful programming language. In Lisp you can modify the programming language. You can write Lisp code that writes Lisp code. You can’t do that in other languages.</p>

<p>I don’t know if I’ll ever use Lisp for anything useful. Nevertheless, learning it has been fun. I learned different ways to express ideas. I understand the languages I do know better.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
