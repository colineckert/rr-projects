import React, { Component } from 'react';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '497692444496-4jc5ssbnf8808ned728serpruuad8l9o.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
