import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './pages/Home.tsx'
import MoviePage from './pages/Movie.tsx'
import SearchPage from './pages/Search.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/imdb-api/query-client.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/movies', element: <SearchPage /> },
      { path: '/movies/:id', element: <MoviePage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
