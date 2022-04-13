import GlobalStyle from "./globalStyles";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./components/Themes";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import {AnimatePresence} from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {

  const location = useLocation();
  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

      <SoundBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/react-portfolio" component={Main} />
          <Route exact path="/react-portfolio/about" component={AboutPage} />
          <Route exact path="/react-portfolio/blog" component={BlogPage} />
          <Route exact path="/react-portfolio/work" component={WorkPage} />
          <Route exact path="/react-portfolio/skills" component={MySkillsPage} />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
    </>
    
}

export default App

