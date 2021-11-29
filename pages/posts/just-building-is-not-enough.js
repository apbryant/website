import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function JustBuildingIsNotEnough() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Just building isn't enough</h2>
        <h3>29 November 2021</h3>

<Image
            src="/images/just-building-is-not-enough/rancagua_bench.jpg" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={325} // Desired size with correct aspect ratio
            alt=""
          />

<p>Do you feel like you're on top of your housework? Probably not. There's probably a long list of things to do, sapping your brain's RAM. Why do you feel this way? Your ancestors from 1800 wouldn't believe it if you told them. If you're reading this, you probably have access to an array of labor-saving devices in your home. Dishwashers, washing machines, vacuum cleaners, etc are powered do in minutes tasks which once took hours. How could this be?</p>

<p>There's a 2019 article in The Atlantic, Three Theories for Why You Have No Time, that gives hypotheses as to why this is the case. Essentially, we move the goal posts. We make up new standards that account for our increased work capacity, and judge ourselves based on them. Some of them are probably good, like frequent bathing. Others are just keeping up with the Joneses, like having a larger and more elaborate home to clean.</p>

<p>I bring the article up because it paints a clear scenario of adoption of technology in a space doing the things we asked of it, but at the same time not. Home labor saving devices lessened the workload of each task, but not our free time because of how we decided to use them. I've become more skeptical of adopting things without putting thought towards what you hope to achieve with a new tool and whether it's the best thing for the job. It's a trap best avoided. Just building a new tool and getting people to use it isn't enough to drive meaningful change. Another type of innovation is necessary. You also have to improve how the user relates to technology so that they can keep the proper perspective and focus when using the new tools. Otherwise it's mo' tech, mo' problems.</p>

<p>You need to know what you want, and not let changing expectations encroach upon your goals. The Amish are experts at this. An extreme example, yes, but they show the point. The Amish are a Christian denomination living primarily in the Eastern United States, such as Pennsylvania and Ohio. They're known for their very limited use of modern technologies. They don't live under rocks, though. It's quite the opposite. They know full well what's out there. They may even use modern technologies. What they are, though, is laser focused. Their priorities are to serve God, their families, and their communities. Everything else takes a backseat. When something new comes along, they assess its costs and benefits. They try it out. And if they think it will help them meet their priorities, they adopt it. If not, they don't. The boundaries as to what's acceptable aren't fixed. They are constantly shifting as different tech gets added and removed. Different Amish communities will have different rules as to what's acceptable for them. The takeaway is that they have the right mindset to make best use of technology, and know how to adapt when new tools come along. They have their priorities straight. They make sure that the things that they use serve them, and guard against keeping up with changing expectations just because. They don't worry about what the cool kids are doing, or keeping up with the hot new thing they heard about.</p>

<p>"Come on, Andrew", you may be thinking, "you've gone off the deep end. I'm not Amish, nor do I want to be. Are we not supposed to try new things? Should we not take advantage of technology to improve our lives? What's the point of making it if we can't use it?". And I'd agree. After all, I'm sitting on a chair, in a house, wearing clothes to stay warm and glasses so I can see clearly. I'm typing on a keyboard that manipulates a computer which runs software programs that make these characters appear on a monitor. The amount of innovation and ingenuity required for this to be possible is mind-boggling. The key is the "how" and "why" behind the actions. Are you using the tool out of a genuine interest in it? Is it really adding value to your life? Can it get you closer to achieving whatever goals you set out for yourself? Are those goals even worth achieving? Are you aware of the trade-offs and risks involved, and do you accept them? Or, are you using it because you "should", or because everyone else is, or to scratch some emotional itch that's better dealt with in another way?</p> 

<p>This matters. Because if you're not intentional about the tools you use, you'll be used by them. And whatever you had hoped to get out of your use of the tool will still be out of your grasp.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
