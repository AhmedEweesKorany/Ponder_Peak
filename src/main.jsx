import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index.js'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'


const queryClient = new QueryClient()
axios.defaults.baseURL = 'http://localhost:5000';
ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Provider store={store}>
<QueryClientProvider client={queryClient}>

    <App />
</QueryClientProvider>

    </Provider>
    </BrowserRouter>
)
