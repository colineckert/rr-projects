import react from 'react';
import reactDom from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Hi there!</div>;
};

reactDom.render(<App />, document.querySelector('#root'));
