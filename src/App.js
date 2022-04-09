import { Route, Switch, useLocation } from 'react-router';
import { Fragment } from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from './components/Themes';

/* COMPONENTS */
import Main from './components/Main';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation()

  return <Fragment>

  <GlobalStyle />

  <ThemeProvider theme={lightTheme}>

  <AnimatePresence exitBeforeEnter >

   <Switch location={location} key={location.pathname}>
     <Route exact path="/" component={Main} />
     <Route exact path="/contact" component={ContactPage} />
     <Route exact path="/about" component={AboutPage} />
     <Route exact path="/work" component={WorkPage} />
     <Route exact path="/skills" component={MySkillsPage} />
     
   </Switch>
   </AnimatePresence>

  </ThemeProvider>
   
    </Fragment>
    
};

export default App

