import Link from 'next/link'

export default function Header(){
    return(
        <><header >
            <ul className='container'>
                <li>
                    <Link href="/">
                        <a className="card">HOME</a>
                    </Link>
                </li>

                <li>
                    <Link href="/users/detail" >
                        <a className="card">Member </a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className="card">
                            Learn
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="" >
                        <a className="card">
                            Examples
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="" className="card">
                        <a className="card">
                            Gallery
                        </a>
                    </Link>
                </li>
            </ul>
        </header><style jsx>{`
        ul li{
          list-style:none;
          margin:20px;
        }

        .container{
            padding:8px;
            box-shadow:3px 3px 11px 3px rgb(0 0 0/32%);

        }

        ul{
          display:flex;
          margin:0 auto;
        }

        a{
          text-decoration: none;
          color:black;
          margin:80px;
        }
        `}</style></>
    )
}