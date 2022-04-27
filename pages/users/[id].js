import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function UsersDetail(props){
    const router = useRouter()
    const {id} = router.query
    const {user} = props
    return(
        <Layout pageTitle="Bio Member">
            <div>
                <p>Bio Member{id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
            </div>
        </Layout>
    )
}

export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    const paths = dataUsers.map((user)=>({
        params:{
            id: `${user.id}`
        },
    }))

    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const {id} = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()
    return{
        props:{
            user,
        },
    }
}