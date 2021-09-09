import React, { Component } from 'react';

export default class HeyArnoldContainer extends Component {
  state = {
    loading: true,
    characters: []
  };

  render() {
    return <h1>Loading...</h1>;
  }
}
