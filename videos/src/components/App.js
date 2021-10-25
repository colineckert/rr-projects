import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

export default class App extends Component {
  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}
