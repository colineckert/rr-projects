import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        commentText="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00PM"
        commentText="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 3:00PM"
        commentText="Nice blog post!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
