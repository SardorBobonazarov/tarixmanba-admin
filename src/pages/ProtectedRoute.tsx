import { ReactElement } from "react"
import { useUserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"
import Layout from "../layout"

interface props {
    children: ReactElement
}

const ProtectedRoute: React.FC<props> = ({children}) => {
    const {user} = useUserContext()
    if(!user.email) {
        return (
            <Navigate to={"/login"} />
        )
    }

    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default ProtectedRoute