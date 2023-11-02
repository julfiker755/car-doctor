import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HelmetProvider } from 'react-helmet-async';
import UserContaxt from './components/UserContaxt/UserContaxt.jsx';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <UserContaxt>
  <HelmetProvider>
       <App />
   </HelmetProvider>
  </UserContaxt>
    </QueryClientProvider>
  </React.StrictMode>,
)
