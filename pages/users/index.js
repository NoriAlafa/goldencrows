import Layout from "../../components/layout";

export default function Users(props){
    const {dataUsers} = props
    console.log(dataUsers)
    return(
        <Layout pageTitle="Member">
            <div>
                <p>Detail Member</p>
                {dataUsers.map(user=>{
                    return(
                        <>
                            <table border="1">
                                <tr>
                                    <th>{user.name}</th>
                                </tr>
                                <tr>
                                    <td>{user.email}</td>
                                </tr>
                            </table>
                        </>
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