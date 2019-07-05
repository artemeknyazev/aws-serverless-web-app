import * as React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
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

// 404
const NotFoundPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Not found</title>
    </Helmet>
    <h1>Not found</h1>
  </React.Fragment>
);

// 5**
const InternalErrorPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Internal error</title>
    </Helmet>
    <h1>Internal error</h1>
  </React.Fragment>
);

const Header = () => (
  <header>
    <nav>
      <Link to='/'>Main page</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/aaa'>aaa</Link>
    </nav>
  </header>
);

const App = () => (
  <React.Fragment>
    <Helmet defaultTitle='S3rv3r1355' titleTemplate='S3rv3r1355 &mdash; %s' />
    <Header />
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/contacts' exact component={ContactsPage} />
      <Route path='/not-found' exact component={NotFoundPage} />
      <Route path='/error' exact component={InternalErrorPage} />
      <Redirect to='/not-found' />
    </Switch>
  </React.Fragment>
);

export default App;
