import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function EntrevistaConUnBarista() {
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


      <article>
        <h2>¡Entrevista con un barista!</h2>
        <h3>Creado 16 junio 2019</h3>
        <h3>Actualizado 8 mayo 2021</h3>

        <Image
          src="/images/barista-interview/20190605_190501.jpeg" // Route of the image file
          layout="intrinsic"
          height={1333} // Desired size with correct aspect ratio
          width={750} // Desired size with correct aspect ratio
          alt=""
        />
        <p>Soy un consumidor de café de especialidad hace muchos años. Un día me pregunté, ¿quiénes son las personas que me sirven? Cada vez que voy para más café en grano, o una taza de café de especialidad, alguien me ayuda conseguir lo que estoy queriendo. ¿Cuál es su historia? Para contestar esta pregunta fui a Bloom Specialty Coffee y conversé con uno de sus baristas, Jorge. Debajo es un resumen de nuestra entrevista.</p>

<p>Para Jorge, café de especialidad fue un amor a primera vista. En su carrera previa, Jorge trabajaba como bartender en un bar que tenía una cafetería. Un día, un barista vino al bar con café de especialidad. Le vendió café al bar, y mostró a Jorge métodos de hacer cafés filtrados. A partir de este momento se enamoró con el mundo de café de especialidad, eventualmente decidiendo cambiar de ser bartender a ser barista.</p>

<p>No todos tienen en sus mentes el concepto de "café de especialidad". Para la mayoría, hay solo "café"; el café que se sirve en minimarkets o en restaurantes después de comer. Pero para personas que toman café de especialidad, café es parte de una experiencia más grande. Es un mundo donde un buen café te acompaña en tus actividades, como tener una reunión de negocios, conversar con un amigo, o pasar un rato con un buen libro.</p>

<p>Es un tiempo interesante para tomar café de especialidad en Chile. ¡Tenemos suerte para estar aquí! La industria es relativamente nueva; la café de especialidad solo está en Chile hace más o menos cuatro años, y tiene un alcance limitado afuera de Santiago.</p>

<p>A Jorge le gusta más hacer los brews. Entonces, la próxima vez que vayas a Bloom, ¡pídele un "café filtrado"!</p>

<p>Bloom se encuentra en Merced con Lastarria en Santiago Centro. Su horario es 8:00 - 20:00 lunes-viernes y 10:00 - 20:00 sábado-domingo.</p>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3341.0259916068317!2d-70.64350944439025!3d-33.43713953276271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef4ecb421d561b72!2sBloom%20Specialty%20Coffee!5e0!3m2!1sen!2sus!4v1620487688342!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

<a href="https://drive.google.com/file/d/1XLRrLV8cAkoFZfh_jjuCngjkyu14bwIT/view?usp=sharing">Link a entrevista</p>
      </article>

            <footer>
                © Andrew Bryant
            </footer>
    </>
  )
}
