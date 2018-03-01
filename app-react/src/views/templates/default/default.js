import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class DefaultTemplate extends Component {

  render() {
    const { children } = this.props;

    return(
      <Fragment>
        <header>
          <h1><Link to ="/">DefaultTemplate Page</Link></h1>
          <nav>
            <ul>
              <li><Link to ="/signup">Sign Up</Link></li>
              <li><Link to ="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </Fragment>
    );
  }
}

export default DefaultTemplate;