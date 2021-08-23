import Head from 'next/head'
import Link from 'next/link'

import MyHeader from '../../components/MyHeader'
export default function ComplicatedJobs() {
  return (
    <>
      <MyHeader />

      <article>
        <h2>Why modern jobs seem so complicated</h2>
        <h3>10 August 2020</h3>


        <p>Many knowledge workers have the feeling of not being able to explain what exactly they do. They work, but can’t point to a single thing that they made happen. A chef can point to the dishes they make. A garbage collector can say he was the one who keeps your streets clean. A nurse can point to someone and say “I saved that person’s life”.</p>

        <p>Well, sure, someone who works for Apple can say “I helped make the latest iPhone”. But their contribution is imperceptible when taken with the contribution of all the other people who worked on it. The chef, garbage collector, and nurse have a more direct impact. Why is this the case?</p>

        <p>As the economy matures, new tools get more complicated and specialized. They require more people to make. All that work has to be coordinated. You need to make sure everything gets done when it needs to be done.</p>

        <p>These new tools often depend on computers to do the repetitive tasks. Automation leads to the rote labor being done by robots and computers. The tasks that are left require more soft skills. Empathy, creativity, and “cultural fit” matter more than they used to. Companies don’t just have to fill skill gaps. They have to fill personality gaps. Someone with the right skills and wrong personality won’t do.</p>

        <p>This means that a company will grow in different directions based on the personality of those who start it. Since no two people are alike, each company will need team members with different personalities and skills to grow. The exact combination will depend on the gaps that need to be filled.</p>

        <p>The rules are more complicated than before. We have to deal with more laws and regulations than in previous generations. To make something you have to keep an eye on the ever-growing list of rules and regulations. This adds more complexity to making things.</p>

        <p>Jobs combine this mishmash of discrete tasks and soft skills to navigate a bureaucratic landscape. As a result, you can’t give a straight answer when someone asks what you do all day. But somehow, the job makes sense when it’s done. It fits the context of the organization, but can’t be explained outside of it. You become specialized, but not like the factory worker is specialized. You don’t spend your whole day putting one piece of a widget together. Knowledge workers do more than one thing, but those things might not have any obvious relationship with each other. Your job is cobbled together filling in some of the skill gaps that a team has. </p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
