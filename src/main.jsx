import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ArabicAddition from './ArabicAddition.jsx'
import Error from './error.jsx'



const root = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/arabicEdition",
    element: <ArabicAddition/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={root}>
    <App/>
  </RouterProvider>
)
