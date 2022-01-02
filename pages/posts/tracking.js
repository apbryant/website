import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function Tracking() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Tracking</h2>
        <h3>02 January 2022</h3>
<p>This sketch generates shapes whose vertices are Lissajous curves. By filling the shape, geometric patterns are created.</p>

<p>As the number of points increases, so does the intricacy of the resulting shape.</p>
<p>1000 vertices</p>
<Image
            src="/images/tracking/1000-vertices.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="1000 vertices rand-x 2.527129899605087 rand-y 4.97691187825047"
          />
<p>10000 vertices</p>
<Image
            src="/images/tracking/10000-vertices.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="10000 vertices rand-x 2.527129899605087 rand-y 4.97691187825047"
          />
<p>100000 vertices</p>
<Image
            src="/images/tracking/100000-vertices.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="100000 vertices rand-x 2.527129899605087 rand-y 4.97691187825047"
          />

<p>By changing the values passed to the function that creates the coordinates, images with different curves are generated.</p>
<p>rand-x = 1.9891400422966443, rand-y = 4.031081884920011</p>
<Image
            src="/images/tracking/sketch-bad5074a-49ff-4c7f-9d77-1c9023896ec3-n-100000-randx-1.9891400422966443-randy-4.031081884920011-.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="rand-x = 1.9891400422966443, rand-y = 4.031081884920011"
          />


<p>rand-x = 6.571199602418256, rand-y = 3.428803865740482</p>
<Image
            src="/images/tracking/sketch-a243d34d-f272-4de4-831a-9e6aa24e4557-n-100000-randx-6.571199602418256-randy-3.428803865740482-.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="rand-x = 6.571199602418256, rand-y = 3.428803865740482"
          />

<p>rand-x = 2.5271298996050873, rand-y = 4.976911878250472</p>
<Image
            src="/images/tracking/sketch-214c3ed6-b762-458b-89d9-005a58c1fe72-n-100000-randx-2.5271298996050873-randy-4.976911878250472-.png" // Route of the image file
            layout="intrinsic"
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="rand-x = 2.5271298996050873, rand-y = 4.976911878250472"
          />

<p><a href="https://github.com/apbryant/creativecoding/tree/master/tracking/sketch
">Link to code</a></p>


Notes:
<ul><li>Thanks to Jon Campbell for the with-matrix macro.</li></ul>
     </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
