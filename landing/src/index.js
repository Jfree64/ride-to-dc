import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Utils
import { ScrollToTop } from './utils/ScrollToTop'
import { rainbow } from './utils/fun'

// Components
import { Header } from 'components/Header'
import { Footer } from 'components/Footer' 

// Pages
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { FAQ } from 'pages/FAQ'
import { TheRoute } from 'pages/TheRoute'
import { Join } from 'pages/Join'
import { Schedule } from 'pages/Schedule'
import { Blank } from 'pages/Blank'
import { Donate } from 'pages/Donate'

// Contexts
import { ContentProvider } from 'contexts/ContentContext';

// Style
import 'style/index.scss'

import * as serviceWorker from './serviceWorker';

// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-173451976-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  rainbow('Abolish ICE')
  return(
    <ContentProvider>
        <Router>
          <ScrollToTop />
            <Header />
            <Switch>
              <Route path="/sign-up" component={ Join }/>
              <Route path="/route" component={ TheRoute }/>
              <Route path="/about" component={ About }/>
              <Route path="/faq" component={ FAQ }/>
              <Route path="/schedule" component={ Schedule }/>
              {/* <Route path="/sponsors" component={ Sponsors }/> */}
              {/* <Route path="/donate" component={ Donate }/> */}
              <Route exact path="/:slug" component={Blank}/>
              <Route path="/" component={ Home }/>
            </Switch>
          <Footer />
        </Router>
      </ContentProvider>
  )
}

window.onload = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
