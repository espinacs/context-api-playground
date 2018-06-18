import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import AuthContext from '../../config/AuthContext';

const menuItems = [
  {
    id: 'devices',
    private: true,
    slug: '/devices',
    label: 'Devices',
  },
  {
    id: 'faq',
    private: true,
    slug: '/faq',
    label: 'Help',
  },
  {
    id: 'support',
    private: true,
    slug: '/support',
    label: 'Support',
  },
];

const AuthButton = withRouter(({ history }) => (
  <AuthContext.Consumer>
    {auth => (
      auth.authorized ? (
        <p>
          Welcome! <button onClick={() => {
          auth.signout(() => history.push('/'));
        }}>Sign out</button>
        </p>
      ) : (
        <p>You are not logged in.</p>
      )
    )}
  </AuthContext.Consumer>
));

require('./styles.css');


const Navigation = () => (
  <AuthContext.Consumer>
    {auth => (
      <Fragment>
        <Menu mode="horizontal">
          {menuItems.filter(el => auth.authorized && el.private).map(item => (
            <Menu.Item key={item.slug}>
              <Link to={item.slug}>
                {item.icon && <Icon type={item.icon} />}
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <AuthButton />
      </Fragment>
    )}
  </AuthContext.Consumer>
);

Navigation.propTypes = {
};

Navigation.defaultProps = {
};

export default Navigation;
