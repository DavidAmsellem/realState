import HomePage from "./routes/homepage/homepage"
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage"

import {
  createBrowserRouter,
  RouterProvider,

  
} from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";




function App() {

  const router = createBrowserRouter([
    { path: "/", 
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage/>}, // home page
        { path: "/list", element: <ListPage/>}, // listado de propiedades
        { path: "/:id", element: <SinglePage/>}, // todos los ids en la barr
        
      ]

          },
    { path: "/list", element: <ListPage/>},

   
      
  ]);


  return (

    /*
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
      <HomePage/>
      </div>
    
    </div>*/

    <RouterProvider router={router}/>
  )
}

export default App