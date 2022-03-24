import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function WhatsMissingInPhotosOfPresidents() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>What's missing in photos of presidents</h2>
        <h3>24 March 2022</h3>

<Image
            src="/images/whats-missing-in-photos-of-presidents/image.jpg" // Route of the image file
            layout="intrinsic"
            height={351} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt=""
          />
<p>Look at a photo of a president from the past couple decades working in their office. They're as pressured by technology as we are. Probably more so, much more, given the demands of the job. They work with their minds by making decisions, speaking, and writing, just like other knowledge workers. But something is missing compared to the desks of most people who spend their days engaged in similar tasks.</p>

<p>Can you spot it?</p>

<p>A computer.</p>

<p>Apart from the telephone and attire, their workspaces don't look much different from those of previous centuries. Papers, pens. Their retinue hovering around them. But in most of their photos, a computer isn't there. If it is there, it’s shoved to the side, relegated to the periphery of the workspace.</p>

<p>Compare that to the office of the typical knowledge worker. Rows of desks with computers front and center, prominently placed.</p>

<p>Why is that?</p>

<p>You could interpret it many different ways. Maybe it's a sign of the inability of the public sector to catch up. How much more effective would its leaders be if they only leveraged the newest tools? How backward are they if they can't even have a laptop at the ready? It's why the public sector bumbles around while private companies run circles around it before capturing it with their lobbyists.</p> 

<p>Or maybe they understand something we don't. That having these tools always at hand is a distraction when your every move is scrutinized, torn apart, and your decisions risk lives and huge sums of money. All problems within human society are people problems at the end of the day. To learn about people you don't need to be clacking away at a keyboard. You need to be observing and communicating with others.</p>

<p>It could be they want to compensate by projecting an air of stateliness and gravity in their photos. It’s funny, I assumed that to look stately and serious you needed to forsake the computer. You might have as well. Maybe some part of us deep down has internalized how computers work and doubts whether the computer, as embedded as it is into our society's fabric, will stand the test of time, when time is measured in centuries, not years, or that they're not up to the task of solving the problems that statesmen have faced over the span of history.</p>

<p>Maybe it's a bit of all those things. Maybe it's none of them. Maybe there are other factors at play. I don’t know. This is one of those essays that brings more questions than answers. But it's something I’ve noticed, and I find interesting to think about.</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
