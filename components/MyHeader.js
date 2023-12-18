import React, { Component } from 'react'
import Head from 'next/head'


import Link from 'next/link'

const MyHeader  = () => {
  return <>
    <div class="headerDiv">

    <Link href="/">
      Home
    </Link>
    {" "}

    <Link href="/posts/posts-index">
      Posts
    </Link>
    {" "}

    <Link href="/artwork">
      Artwork
    </Link>
    {" "}

    <Link href="/cv">
      CV
    </Link>
    </div>

    </>;
}

export default MyHeader
