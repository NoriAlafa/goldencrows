import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function UsersDetail(){
    const router = useRouter()
    const {id} = router.query
    return(
        <Layout pageTitle="Bio Member">
            <div>
                <p>Bio Member {id}</p>
            </div>
        </Layout>
    )
}