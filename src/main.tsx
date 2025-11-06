import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'
import './i18n.js';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
<HashRouter>
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    <App />
  </StrictMode>
  </QueryClientProvider>
  </HashRouter>
)
