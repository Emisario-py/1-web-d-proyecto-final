import { useEffect, useState } from "react"
import { api } from "./services/api"
export const PrivateRoute = ({children}) => {
  const [auth, setAuth] = useState(null)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/profile")
        setAuth(true)
      } catch (error) {
        console.log(error)
        setAuth(false)
      }
    }
    checkAuth()
  }, [])
  
  return auth ? children : <Navigate to="/login"/>
}