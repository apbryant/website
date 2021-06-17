import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function ReactNativeAndroidSetup() {
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
        <h2>React Native Android setup</h2>
        <h3>Created 16 June 2020</h3>
        <h3>Updated 17 June 2020</h3>
        <p>Programming computers is hard. We’re reminded of that every day we sit down to work. But before you can even get to programming, you have to set up your computer so that the program can have a chance to run. This can be tricky, depending on matching up operating systems, packages, and versions of software.</p>

  <p>I had the pleasure of setting up an environment for React Native. React Native is a way to use the JavaScript library React to make iOS and Android applications. You really can use JavaScript for everything these days.</p>

  <p>First, follow the instructions on <a href="https://reactnative.dev/docs/environment-setup">React Native's site</a> to install the software packages needed to develop in Android on my Mac. Yes, developing for Android on a Mac. Sometimes you gotta do what you gotta do.</p>

  <p>Next, if you’re plugging into an existing project is to run <em>npm install</em> in the terminal from the project’s directory, so you have all the packages up to date.</p>

  <p>Then, type <em>npm run android</em> to compile and run the project. If everything is in order, the application will run. For me, though, that wasn’t the case. My terminal filled with errors. If that happens to you, here are some things to check out. They are problems that I had, and solving them helped me get React Native working on my Mac:</p>

<ul>
  <li>Your React Native project should have a directory in the project’s root called “android”. In there put a file called “local.properties” with the following line: <em>sdk.dir = /Users/YOUR_NAME/Library/Android/sdk</em> substituting <em>YOUR_NAME</em> with your username. This lets the app know where to find the software development kit (SDK) it needs.</li>
  <li>Run <em>export ANDROID_HOME=~/Library/Android/sdk</em> in the app’s root directory. Similar to the above, tells the app where to look for the software development kit, basically a collection of software to assist in developing Android applications. I find myself having to do this frequently, especially when running the application for the first time after opening the terminal.</li>
  <li>Accept all the SDK licenses. You can find them in Android Studio’s preferences:</li>

  <Image
     src="/images/react-native-android-setup/screenshot.png" // Route of the image file
     layout="intrinsic"
     height={840} // Desired size with correct aspect ratio
     width={1094} // Desired size with correct aspect ratio
     alt=""
   />




  <li>Specifically, you want to check Android SDK Command-line Tools (latest) and hit apply, so that you can accept the tools’ licenses.</li>

  <li>Generate a keystore with <em>keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000</em> in the app subdirectory (in the android folder referenced earlier). This is where authorization and security certificates are kept.</li>

  <li>Create the tools.jar file following <a href="https://stackoverflow.com/questions/56389284/execution-failed-for-task-appcompiledebugjavawithjavac-could-not-find-too/65560333#65560333">Nathan Loterio's answer to this Stack Overflow question</a></li>
</ul>

  <p>With those you should solve the problems in environment setup and start developing. I hope this post helps!</p>

  <p>Further reading. The solutions above were in the following StackOverflow pages:</p>

  <ul>
    <li>
      <a href="https://stackoverflow.com/questions/38835931/react-native-adb-reverse-enoent">Setting Android Home SDK path</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found#32640154">Creating local.properties</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/39760172/you-have-not-accepted-the-license-agreements-of-the-following-sdk-components?noredirect=1&lq=1">Accepting SDK licenses</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/48017376/keystore-not-found-for-signing-config-release-react-native">Creating keystore</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/56389284/execution-failed-for-task-appcompiledebugjavawithjavac-could-not-find-too/65560333#65560333">Creating tools.jar</a>
    </li>
  </ul>

      </article>

            <footer>
                © Andrew Bryant
            </footer>

            <style jsx>{`
        div{
          text-align:center;
        }
      `}</style>
    </>
  )
}
