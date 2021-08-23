import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'

export default function ItsMe() {
  return (
    <>
    <MyHeader />

      <article>
        <h2>It's me</h2>
        <h3>23 June 2019</h3>
        <p>People think that computers are these mysterious machines, but they’re actually quite simple. All they can really do is simple operations, like adding two numbers together. They’re also stupid. Basically, computers only do exactly what they’re told to do. They can’t think for themselves. So when I write a program, thinking it will do something and it does something else, the computer isn’t at fault. Again, it’s just doing what it’s told. The blame falls squarely on me.</p>



<p>This is what can make programming so frustrating. Sometimes in life we try to put the blame on other things. It makes us feel a bit better in a moment where we’re grappling with strong negative emotions.  We get started doing this in childhood by doing things like telling the teacher the dog ate our homework. But when a program I’m writing doesn’t work, I can’t blame the computer. There’s nowhere to hide. I’m forced to examine the shortcomings in your reasoning that caused the undesired outcome. I realize that I’m as smart as I thought I was. I realize that I did not understand the problem as well as I thought I did. There’s nobody to blame but me.</p>



<p>What works for me is to remember that this is part of the course of development. Every programmer makes mistakes. In a way, I take the mistakes as a sign of my progress. If I weren’t making mistakes, I wouldn’t be getting better because I wouldn’t be pushing myself.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
