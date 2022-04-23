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
        <h1 className='judul'>
          Welcome to <a className='title-homepage' >Golden Crows</a>
        </h1>


      </main>

      
    </div>

    
  )
}
