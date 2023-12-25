import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.Fragment>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
