import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/layout'

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>Golden Crows</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className='judul'>
            Welcome to <a className='title-homepage' >Golden Crows</a>
          </h1>


        </main>
      </Layout>

      
   

    
  )
}
