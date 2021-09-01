import react from 'react';
import reactDom from 'react-dom';

const App = () => {
  return <div>Hi there!</div>;
};

reactDom.render(<App />, document.querySelector('#root'));
