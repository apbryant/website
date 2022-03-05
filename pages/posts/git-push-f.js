import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function GitPushF() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>git push -f</h2>
        <h3>05 March 2022</h3>

<Image
            src="/images/git-push-f/lillies.jpg" // Route of the image file
            layout="intrinsic"
            height={333} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt=""
          />


<p>Getting my creative coding sketches printed and framed taught me the difference between doing things on the screen versus off of it. It goes like this: you see an image on your screen. It looks great. You go to print it. And WTF?! It comes out pixelated.</p>

<p>That's because when you save an image using the common creative coding tools, they’re saved with a pixel density of with 72 pixels per inch. To print an image, the recommended minimum pixel density is 300 pixels per inch, over 4 times higher. To get an image at the size you want and 300 pixels per inch you have to create a much bigger image and resize it down.</p>


<p>Next, you have to find a printer that's open when you are available. You have to go there. You have to explain the image dimensions to another person. You have to wait. You have to take out your wallet and give someone your money. You get your image, and you see differences in how you perceived it on the screen vs when you’re holding it in your hands. You have to carry your image home, make sure it doesn't get bent or wet. You have to store it so the image doesn't get damaged.</p>

<p>It’s a similar process with framing. Go, talk, pay, wait, store.</p>

<p>There’s more friction when you operate in the real world.</p>

<p>When you screw up a piece of code you can just roll back the commits or, git push -f, or in the worst case, re-clone the repository.</p>

<p>If a website crashes, or an email gets sent out with a typo the person responsible may be embarrassed. They or their company might also lose a bit of money, but in short order the mistake can be corrected and the incident forgotten.</p>

<p>But if a print I made doesn’t turn out the way I'd hoped, I may have to wait another week and shell out more of my money to get another copy made. If an engineer doesn't double check the specifications of the bridge the bridge could fall. If a cook at a restaurant undercooks the chicken, someone could get food poisoning. If a pilot doesn't do their safety checks before flying the plane, it could crash.</p>

<p>There's no git push -f in the real world. There are real consequences to decisions.</p>

<p>As technology marches on, software engineers are going to need to learn this lesson. This is because code has wormed its way into so much of our formerly analog technology. Cars are just computers on wheels nowadays. We have smart watches, smart homes, smart everything. It would do the software engineer well to remember that their code isn't just code. It's not just there to fiddle with our brains in order to generate ad revenue. Lives depend on it.</p>

      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
