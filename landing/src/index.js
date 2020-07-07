import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScrollToTop } from './utils/ScrollToTop'

// Components
import { Header } from 'components/Header'
import { Footer } from 'components/Footer' 

// Pages
import { Home } from 'pages/Home'

// Contexts
// import { ContentProvider } from 'contexts/ContentContext';

import 'style/index.scss'

import * as serviceWorker from './serviceWorker';


function App() {
  return(
    // <ContentProvider>
      <Router>
        <ScrollToTop />
          <Header />
          <Switch>
            <Route path="/" component={ Home }/>
          </Switch>
        <Footer />
      </Router>
    // </ContentProvider>
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
