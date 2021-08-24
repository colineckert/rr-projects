//  Import the React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = 'Click me!';
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and show it on screen
ReactDom.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
