import { useEffect } from "react"

import { useRouter } from "next/router"

export default function Custom404(){
    const Router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            Router.push('/')
        },2000)
    },[])

    return(
        <div className="title404">
            Halaman yang anda tuju tidak ada<br/>
            anda akan kembali ke homepage dalam 2 detik
        </div>
    )
}