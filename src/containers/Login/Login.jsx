import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Icon, Spin } from 'antd';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../config/AuthContext';

class Login extends React.Component {
  state = {
    error: false,
    pinCode: '',
    redirectToReferrer: false,
  };

  render() {
    const { pinCode, error } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    console.log('from ', from);
    console.log('redirectToReferrer', redirectToReferrer);
    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }
    return (
      <AuthContext.Consumer>
        {({ authenticate }) => (
          <div className="login-page">
            <div className="login-form-wrapper">
              <form
                className="login-form"
                autoComplete="off"
                onSubmit={authenticate(pinCode)}
              >
                <Input
                  type="text"
                  name="pincode"
                  addonBefore={<Icon type="code" />}
                  placeholder="PINCODE"
                  value={pinCode}
                  onChange={e => this.setState({ pinCode: e.target.value })}
                  size="large"
                />

                { error ? (
                  <p className="login-form-error" >
                    <Icon type="exclamation-circle-o" />
                    <br /><br />
                    { error.error && error.error.corsLikely ? error.message : 'error' }
                    <br />
                    { error.error && error.error.corsLikely ? '' : error.message }
                  </p>
                ) : '' }

                <Button
                  className="login-form-submit"
                  htmlType="submit"
                  icon="unlock"
                >
                  {'Submit'}
                </Button>
              </form>
            </div>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

Login.propTypes = {
  location: PropTypes.string,
};

Login.defaultProps = {
  location: null,
};

export default Login;
