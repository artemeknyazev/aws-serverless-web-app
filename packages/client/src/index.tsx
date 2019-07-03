import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const MainPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Main page</title>
    </Helmet>
    <h1>Main page</h1>
  </React.Fragment>
);

const ContactsPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Contacts</title>
    </Helmet>
    <h1>Contacts</h1>
  </React.Fragment>
);

const Nav = () => (
  <nav>
    <Link to='/'>Main page</Link>
    <Link to='/contacts'>Contacts</Link>
  </nav>
);

const Header = () => (
  <header>
    <Nav />
  </header>
);

const App = () => (
  <Router>
    <Helmet
      defaultTitle='S3rv3r1355'
      titleTemplate='S3rv3r1355 — %s'
    />
    <Header />
    <Route path='/' exact component={MainPage} />
    <Route path='/contacts' exact component={ContactsPage} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
