import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import ErrorPage from './Component/ErrorPage'
import SignIn from './Pages/SignInPage'
import SignUp from './Pages/SignUp'
import Terms from './Pages/Terms'
import Privacy from './Pages/Privacy'


const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    }
    
    ,{
      path:"/terms",
      element:<Terms/>
    }
    ,{
      path:"/privacy",
      element:<Privacy/>
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App