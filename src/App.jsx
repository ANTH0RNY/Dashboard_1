import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet } from 'react-router-dom';
import Main from './components/main';
import Panel from './components/panel';



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
      <Panel/>
    <div className="main">
      <Outlet/>
    </div>
   </div>
  )
}

export default App
