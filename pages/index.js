import MyHeader from '../components/MyHeader'

export default function Home() {
  return (
    <>
    <MyHeader />
      <main>
        <h1 className="title">
          Welcome
        </h1>
        <p>I'm a software engineer and creative coder based in Richmond, Virginia.</p>
        <h1>Fun facts</h1>
        <ul>
          <li>My hobbies are Brazilian jiu-jitsu, biking, and reading</li>
          <li>I've lived abroad in Santiago, Chile</li>
          <li>I speak Spanish well, maybe even fluently</li>
          <li>My favorite food is 🍕</li>
          <li>My favorite drink is ☕</li>
        </ul>
        <h1>Contact</h1>
        <ul>
          <li>bryant.andrew01@gmail.com</li>
          <li><a href="https://www.instagram.com/andrew_paul_bryant/">Instagram</a></li>
          <li><a href="https://github.com/apbryant">GitHub</a></li>
          <li><a href="https://andrewpaulbryant.art/">Artwork</a></li>
        </ul>
      </main>

      <footer>
          © Andrew Bryant
      </footer>

    </>
  )
}
