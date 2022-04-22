import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Golden Crows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1 className="title">
          Welcome to <a href="">Golden Crows</a>
        </h1>


      </main>

      <footer>
      
          <p>Make with love by Alfa</p>
      </footer>
    
    </div>

    
  )
}
