import Layout from '../components/layout'
import Image from 'next/image'

export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <main>
          <h1 className='judul'>
            Welcome to <a className='title-homepage' >Golden Crows</a>
          </h1>
          <div className='homepage-img'>
            <Image  src="/icon.png" width={200} height={200} alt="icon"/>
          </div>
        </main>
      </Layout>
  )
}
