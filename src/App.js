import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Error from './components/Error'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Shimmer from './components/Shimmer'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import store from './utils/store'

// Chunking
// Code splitting
// dynamic bundling
// Lazy loading
// On demand loading
// dynamic import

const Instamart = lazy(() => import('./components/Instamart'))

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Dummy',
    email: 'aseqw@wqewe.ca',
  })

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
