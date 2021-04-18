import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Artwork() {
  return (
    <>
    <Head>
      <title>Andrew Bryant</title>
      // <link rel="icon" href="/favicon.ico" />
    </Head>
      <div class="headerDiv">
      <Link href="/">
        <a>Home</a>
      </Link>
      {" "}
      <Link href="/posts/posts-index">
        <a>Posts</a>
      </Link>
      {" "}
      <Link href="/artwork">
        <a>Artwork</a>
      </Link>
      {" "}
      <Link href="/cv">
        <a>CV</a>
      </Link>
      </div>
      <div class="row">
        <div class="column">
            <Image
              src="/images/sketches/200923c.png" // Route of the image file
              layout="intrinsic"
              height={800} // Desired size with correct aspect ratio
              width={800} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/image.png" // Route of the image file
              layout="intrinsic"
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/maipu_church.jpg" // Route of the image file
              layout="intrinsic"
              height={1000} // Desired size with correct aspect ratio
              width={843} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/plaza_italia.jpg" // Route of the image file
              layout="intrinsic"
              height={750} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/plaza_de_armas_02.jpg" // Route of the image file
              layout="intrinsic"
              height={750} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/coast.jpg" // Route of the image file
              layout="intrinsic"
              height={1000} // Desired size with correct aspect ratio
              width={750}
              alt=""
            />

        </div>
        <div class="column">
          <Image
            src="/images/sketches/2020_7_25_17_40_14.png" // Route of the image file
            layout="intrinsic"
            height={640} // Desired size with correct aspect ratio
            width={640} // Desired size with correct aspect ratio
            alt=""
          />
            <Image
              src="/images/sketches/big.jpg" // Route of the image file
              layout="intrinsic"
              height={1000} // Desired size with correct aspect ratio
              width={667} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/plaza_de_armas.jpg" // Route of the image file
              layout="intrinsic"
              height={750} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/santa_ana_bridge.jpg" // Route of the image file
              layout="intrinsic"
              height={1000} // Desired size with correct aspect ratio
              width={750}
              alt=""
            />
            <Image
              src="/images/sketches/valdivia.png" // Route of the image file
              layout="intrinsic"
              height={1000} // Desired size with correct aspect ratio
              width={1000}
              alt=""
            />
        </div>
      </div>

      <footer>
          © Andrew Bryant
      </footer>


    </>
  )
}
