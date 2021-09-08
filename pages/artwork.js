import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MyHeader from '../components/MyHeader'

export default function Artwork() {
  return (
    <>
    <MyHeader />
      <div class="row">
        <div class="column">

        <Image
          src="/images/sketches/process.png" // Route of the image file
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
            <Image
              src="/images/sketches/powerful.jpg" // Route of the image file
              layout="intrinsic"
              height={543} // Desired size with correct aspect ratio
              width={1000}
              alt=""
            />
            <Image
              src="/images/sketches/stepping_stones.png" // Route of the image file
              layout="intrinsic"
              height={600} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt=""
            />
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
              src="/images/sketches/disorder.png" // Route of the image file
              layout="intrinsic"
              height={900} // Desired size with correct aspect ratio
              width={900} // Desired size with correct aspect ratio
              alt=""
            />

            <Image
              src="/images/sketches/hex_sierpinski.png" // Route of the image file
              layout="intrinsic"
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/200922e.png" // Route of the image file
              layout="intrinsic"
              height={600} // Desired size with correct aspect ratio
              width={600} // Desired size with correct aspect ratio
              alt=""
            />



        </div>
        <div class="column">

        <Image
          src="/images/sketches/wine_dark_sea.png" // Route of the image file
          layout="intrinsic"
          height={600} // Desired size with correct aspect ratio
          width={1000} // Desired size with correct aspect ratio
          alt=""
        />
        <Image
          src="/images/sketches/dream_port.jpg" // Route of the image file
          layout="intrinsic"
          height={566} // Desired size with correct aspect ratio
          width={1000} // Desired size with correct aspect ratio
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
            <Image
              src="/images/sketches/plotter_2021_5_16_10_35_26.svg" // Route of the image file
              layout="intrinsic"
              height={576} // Desired size with correct aspect ratio
              width={792} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/2020_7_25_17_40_14.png" // Route of the image file
              layout="intrinsic"
              height={640} // Desired size with correct aspect ratio
              width={640} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/200913p.png" // Route of the image file
              layout="intrinsic"
              height={640} // Desired size with correct aspect ratio
              width={640} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/handwriting.png" // Route of the image file
              layout="intrinsic"
              height={900} // Desired size with correct aspect ratio
              width={900} // Desired size with correct aspect ratio
              alt=""
            />
            <Image
              src="/images/sketches/lissajous_square.png" // Route of the image file
              layout="intrinsic"
              height={900} // Desired size with correct aspect ratio
              width={900} // Desired size with correct aspect ratio
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
