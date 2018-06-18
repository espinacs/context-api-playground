import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import enUS from 'antd/lib/locale-provider/en_US';
import { IntlProvider } from 'react-intl';
import { LocaleProvider } from 'antd';


import { AuthContextProvider } from './AuthContext';
import Navigation from '../containers/Navigation';
import ProtectedRoute from './ProtectedRoute';
import Contact from '../containers/Contact';
import Login from '../containers/Login';

class RouterComponent extends React.Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <IntlProvider key="intl" locale="en">
          <Router>
            <AuthContextProvider>
              <Navigation />
              <Switch>
                <Route path="/" component={Login} />
                <ProtectedRoute path="/contact" component={Contact} />
              </Switch>
            </AuthContextProvider>
          </Router>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default RouterComponent;
