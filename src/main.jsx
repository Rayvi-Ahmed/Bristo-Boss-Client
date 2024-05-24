import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import AuthProvider from './Provider/AuthProvider/AuthProvider'
import {
 
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='max-w-screen-lg mx-auto'>
<AuthProvider>
<QueryClientProvider client={queryClient}>
<RouterProvider router={router}></RouterProvider>   
    </QueryClientProvider>
</AuthProvider>

</div>

  </React.StrictMode>,
)
