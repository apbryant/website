import Link from 'next/link'

export default function HeaderLinks() {
  return (
    <>
    <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    {" "}
    <Link href="/posts/first-post">
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
    </>
  )
}
