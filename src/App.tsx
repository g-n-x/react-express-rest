import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch as MaterialSwitch } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height: "100vh"}}>
        <MaterialSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Router>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/home" exact component={HomePage} />
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
