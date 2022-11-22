import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../../components/MyHeader'
import Image from 'next/image'

export default function Quench() {
  return (
    <>
  <MyHeader />


      <article>
        <h2>Quench: A haiku</h2>
        <h3>22 November 2022</h3>

<Image
            src="/images/quench/image.jpg" // Route of the image file
            layout="intrinsic"
            height={393} // Desired size with correct aspect ratio
            width={700} // Desired size with correct aspect ratio
            alt=""
          />
          <p>Gulping down the next</p>
          <p>satisfying prize or goal</p>
          <p>drinking the ocean.</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
