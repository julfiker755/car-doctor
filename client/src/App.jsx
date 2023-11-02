import {RouterProvider,} from "react-router-dom";
import routes from "./components/Routerdom/routes/routes";
function App() {
  return (
  <div>
   <RouterProvider router={routes}></RouterProvider>
  </div>
  )
}

export default App
