import React, { Component } from 'react';
import DefaultTemplate from 'views/templates/default/default';


class NotFoundPage extends Component {
  render() {
    return(
      <DefaultTemplate>
        <h1>Not Found Page</h1>
      </DefaultTemplate>
    );
  }
}

export default NotFoundPage;