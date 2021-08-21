//  Import the React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () => {
  return <div>Hi there!</div>;
};

// Take the react component and show it on screen
ReactDom.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
