import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,} from "react-router-dom";
import router from './router/router.jsx';
import theme from './theme'; // Import your theme
import ThemeProvider from './ThemeProvider.jsx';
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
