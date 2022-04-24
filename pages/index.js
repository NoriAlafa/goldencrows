import Layout from '../components/layout'
import Image from 'next/image'

export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <main>
          <h1 className='judul'>
            Welcome to <a className='title-homepage' >Golden Crows</a>
          </h1>
          <Image className="homepage-img" src="/icon.png" width={200} height={200} alt="icon"/>
        </main>
      </Layout>
  )
}
