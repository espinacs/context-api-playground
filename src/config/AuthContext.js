import React from 'react';

const AuthContext = React.createContext(false);

export class AuthContextProvider extends React.Component {
  state = {
    authorized: false,
    authenticate: (pincode) => {
      if (pincode === 123) {
        this.setState({ authorized: true });
      }
    },
    signout: () => {
      this.setState({ authorized: false });
    },
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;
