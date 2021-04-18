import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HowToDrawSubdividedTriangles() {
  return (
    <>
    <Head>
      <title>Andrew Bryant</title>
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


      <article>
        <h2>How to draw lines of subdivided triangles</h2>
        <h3>Created 10 Nov 2020</h3>
        <h3>Updated 17 Apr 2020</h3>
        <p>I start by drawing points along four vertical lines, with variation in the x position. The result is the series of points arranged in four crooked lines.</p>
        <Image
          src="/images/how-to-draw-subdivided-triangles/triangle_subdivision_01.png" // Route of the image file
          layout="intrinsic"
          height={750} // Desired size with correct aspect ratio
          width={750} // Desired size with correct aspect ratio
          alt=""
        />
        <p>Along each “line” I draw a triangle between a point and the two following points.</p>
        <Image
          src="/images/how-to-draw-subdivided-triangles/triangle_subdivision_02.png" // Route of the image file
          layout="intrinsic"
          height={750} // Desired size with correct aspect ratio
          width={750} // Desired size with correct aspect ratio
          alt=""
        />
        <p>I subdivide the triangles recursively. The subdivision algorithm is: Find the longest side of a triangle. Draw a line from a point on that line to the opposite corner of a triangle. Repeat with the two newly created triangles unless a stop condition is met. Hat tip to Tyler Hobb’s <a href="https://tylerxhobbs.com/essays/2017/aesthetically-pleasing-triangle-subdivision">essay</a> Aesthetically Pleasing Triangle Subdivision.</p>


<p>The red points are the places where the larger triangle is split into two. A red point without a line is a point where the recursion stopped.</p>
<Image
  src="/images/how-to-draw-subdivided-triangles/triangle_subdivision_03.png" // Route of the image file
  layout="intrinsic"
  height={750} // Desired size with correct aspect ratio
  width={750} // Desired size with correct aspect ratio
  alt=""
/>
<p>Not showing the certain triangles produces the broken effect. Randomly stopping the recursion helps vary the size of the triangles, making them more interesting. I also removed the points. Here’s the final result:</p>
<Image
  src="/images/how-to-draw-subdivided-triangles/triangle_subdivision_04.png" // Route of the image file
  layout="intrinsic"
  height={750} // Desired size with correct aspect ratio
  width={750} // Desired size with correct aspect ratio
  alt=""
/>
<p>I use a Triangle object to make everything happen. p5.js has a triangle() function, which is good for drawing triangles. But when you want to do more advanced things, like recursively divide the triangles you have to build your own class.</p>

<p>The class should have three vectors to store the coordinates of the three points of the triangle. It should have another vector to store the position of its centroid.</p>

<p>The class should have a method showTriangle() displays the triangles. Another method titled subdivide() is where the subdivision algorithm should be implemented.</p>

<p>Now you have the knowledge to make generative art with triangles. Have fun and send me any results that you like!</p>
</article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
