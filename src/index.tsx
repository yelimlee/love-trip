import { Global } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import reportWebVitals from './reportWebVitals'
import globalStyles from './styles/globalStyles'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // 실패하면 재시도 안하고 실패처리
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

reportWebVitals()
