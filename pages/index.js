import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../components/MyHeader'

export default function Home() {
  return (
    <>
    <MyHeader />

      <main>
        <h1 className="title">
          Welcome to my site!
        </h1>
        <p>I'm a software developer and creative coder from Arlington, Virginia.</p>
        <h1>I'm interested in</h1>
        <ul>
          <li>Learning how to best integrate technology into my life</li>
          <li>Growing as a software developer</li>
          <li>Connecting with other creatives</li>
        </ul>
        <h1>Fun facts</h1>
        <ul>
          <li>I lived abroad in Santiago, Chile from July 2016 to August 2021</li>
          <li>I've worked as an English as a foreign language teacher</li>
          <li>My favorite food is 🍕</li>
          <li>My favorite drink is ☕</li>
          <li>I speak Spanish well, maybe even fluently</li>
          <li>I code this site myself with next.js</li>
        </ul>
        <h1>Where I am</h1>
        <ul>
          <li>Arlington, Virginia</li>
          <li>bryant.andrew01@gmail.com</li>
          <li><a href="https://twitter.com/andrewpbryant">Twitter</a></li>
          <li><a href="https://www.instagram.com/andrew_paul_bryant/">Instagram</a></li>
          <li><a href="https://github.com/apbryant">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/andrew-bryant-90215a6a/">LinkedIn</a></li>
        </ul>
        <h1>Stuff I sell</h1>
        <ul>
          <li><a href="https://www.etsy.com/shop/BryantGenArt">Artwork for sale</a></li>
          <li><a href="https://gumroad.com/andrewpbryant">Ebooks about creative coding</a></li>
        </ul>

      </main>

      <footer>
          © Andrew Bryant
      </footer>

    </>
  )
}
