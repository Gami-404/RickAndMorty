import React from 'react';
import './App.css';



import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderBar from './layouts/HeaderBar';
import Footer from './layouts/Footer';
import Characters from './features/characters/Characters';


const theme = createTheme();



function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeaderBar />
    <main>
    <Characters />
      </main>

    {/* Footer */}
    <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;

