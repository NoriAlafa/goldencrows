import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function Users(props){
    const router = useRouter()
    const {dataUsers} = props
    console.log(dataUsers)
    return(
        <Layout pageTitle="Member">
            <div>
                <p>Detail Member</p>
                {dataUsers.map(user=>{
                    return(
                        <div className="card-user" key={user.id} onClick={()=>router.push(`/users/${user.id}`)}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    return{
      props:{
        dataUsers,
      }
    }
  
}