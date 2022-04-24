import Header from '../Header'
import Footer from '../Footer'
import Head  from 'next/head'

export default function Layout(props){
    const {children , pageTitle} = props
    return(
        <>
            <Head>
                <title>Golden Crows | {pageTitle}</title>
            </Head>
            <div>
                <Header />
                    <div>{children}</div>
                <Footer />
            </div>
        </>
    )
}