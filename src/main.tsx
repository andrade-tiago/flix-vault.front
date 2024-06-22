import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home.tsx'
import MoviePage from './pages/Movie.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/imdb-api/query-client.ts'
import SeriesPage from './pages/Series.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/movie/:id', element: <MoviePage /> },
      { path: '/series/:id', element: <SeriesPage /> },
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
