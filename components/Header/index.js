import Link from 'next/link'

export default function Header(){
    return(
        <><header>
            <ul>
                <li>
                    <Link href="/users/detail" className="card">
                        <a>Member </a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="card">
                        <a>
                            Learn
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="" className="card">
                        <a>
                            Examples
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="" className="card">
                        <a>
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



        ul{
          display:flex;
          margin:0 auto;
        }

        a{
          text-decoration: none;
        }
        `}</style></>
    )
}