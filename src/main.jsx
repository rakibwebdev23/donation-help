import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Layout/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import About from './components/About/About.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowInformation from './components/DonateHelp/ShowInformation/ShowInformation.jsx';
import Projects from './components/Projects/Projects.jsx';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/needhelp",
        element: <Projects></Projects>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/projects/:id",
        element: <ShowInformation></ShowInformation>,
        loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='text-black h-screen'>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
