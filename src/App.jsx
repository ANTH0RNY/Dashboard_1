// src/App.jsx
import { useState } from 'react';
import './App.scss';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet } from 'react-router-dom';
import Panel from './components/panel';
import theme from './theme';
import ThemeProvider from './ThemeProvider';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <div className="app">
        <Panel toggleMode={toggleMode} />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
