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

    <Link href="/cv">
      CV
    </Link>
    </div>

    </>;
}

export default MyHeader
