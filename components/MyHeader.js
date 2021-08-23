import React, { Component } from 'react'
import Head from 'next/head'


import Link from 'next/link'

const MyHeader  = () => {
  return (
    <>
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

      </>
  );
}

export default MyHeader
