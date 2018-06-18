
function pretendRequest(credentials, cb) {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status === 200) {
        let res;

        try {
          res = JSON.parse(xmlHttp.responseText);

          if (_.isArray(res.fieldworks)) {
            cb({
              authenticated: true,
              credentials,
            });
          } else { cb({ authenticated: false }); }
        } catch (ex) {
          cb({ authenticated: false }, ex);
        }
      } else {
        cb({ authenticated: false }, xmlHttp.responseText || xmlHttp.statusText);
      }
    }
  };


  const url = 'http://www.web.com';

  xmlHttp.open('GET', url, true); // true for asynchronous

  xmlHttp.setRequestHeader('Authorization', `Basic ${credentials}`);

  xmlHttp.send(null);
}

export default {
  login(...args) {
    const username = args[0];
    const pass = args[1];
    const cb = args[args.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    const credentials = btoa(`${username}:${pass}`);
    pretendRequest(credentials, (res, error) => {
      if (res.authenticated) {
        localStorage.token = res.credentials;
        if (cb) cb(true);
        this.onChange(true);
      } else {
        if (cb) cb(false, error);
        this.onChange(false);
      }
    });
  },

  getToken() {
    return localStorage.token;
  },

  logout(cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {},
};
