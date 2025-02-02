import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Layout/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowInformation from './components/DonateHelp/ShowInformation/ShowInformation.jsx';
import Projects from './components/Projects/Projects.jsx';
import AuthProviders from './components/Providers/AuthProviders.jsx';
import SignIn from './components/Authentication/SignIn.jsx';
import SignUp from './components/Authentication/SignUp.jsx';
import PrivateRoutes from './components/Authentication/PrivateRoutes/PrivateRoutes.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import UserHome from './components/Dashboard/UserHome/UserHome.jsx';
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
        element:<Projects></Projects>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/projects/:id",
        element: <ShowInformation></ShowInformation>,
        loader: ({ params }) => fetch(`http://localhost:5000/projects/${params.id}`)
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <div className='bg-gray-100'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
