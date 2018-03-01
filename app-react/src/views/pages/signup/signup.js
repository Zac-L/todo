import React, { Component } from 'react';
import DefaultTemplate from 'views/templates/default/default';


class SignUp extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }

    handleOnSubmit = event => {
      event.preventDefault();
      const { state } = this; 

      // fetch('http:localhost:8000/v1/me', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(state)
      // })
      //   .then(response => response.json())
      //   .then(({ data, error }) => error ? Promise.reject(error) : data)
      //   .then(() => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      // });
    }

    handleOnChange = event => {
      const { id, value } = event.target;
      this.setState({ [id]: value });
    }

    render() {
      const { handleOnChange, handleOnSubmit } = this;
      const { firstName, lastName, email, password } = this.state;

      return(
        <DefaultTemplate>
          <h1>SignUp</h1>
          <form onSubmit={handleOnSubmit} autoComplete="off">
            <div>
              <label htmlFor="firstName">First Name </label>
              <input type="text" id="firstName" onChange={handleOnChange} value={firstName}/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" id="lastName" onChange={handleOnChange} value={lastName}/>
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <input type="email" id="email" onChange={handleOnChange} value={email}/>
            </div>
            <div>
              <label htmlFor="password">Password </label>
              <input type="password" id="password" onChange={handleOnChange} value={password}/>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </DefaultTemplate>
      );
    }
}

export default SignUp;