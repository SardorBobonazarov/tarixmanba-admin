import { useRoutes } from "react-router-dom"
import routes from "./routes"

const App = () => { 
  const route = useRoutes(routes)
  return route
}

export default App
