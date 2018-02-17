import React, { Component, Fragment } from 'react';


class IndexPage extends Component {
  state = {
    todos: [],
    fields: {},
  }

    handleSubmit = event => {
      event.preventDefault();

      console.log(event.target.title.value);

      fetch('http://localhost:8000/v1/me/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: event.target.title.value,
        })
      })
        .then(response => response.json())
        .then(json => {
          if(json.error) {
            return Promise.reject(json.error);
          }

          this.setState(prevState => ({
            fields: {},
            todos: prevState.todos.concat(json.data.todo),
          }));
        })
        .catch(response => {
          this.setState({
            fields: response.fields
          });
          console.log('Error!', response);
        });
      event.target.reset();
    }

    render() {
      const { handleSubmit } = this;
      const { fields, todos } = this.state;

      return(
        <Fragment>
          <header>
            <h1>TODO App with Next.js</h1>
          </header>
          <main>
            {todos.length 
              ? (
                <ul>
                  {todos.map(todo => <li>{todo.title}</li>)}
                </ul>
              )
              : (
                <p>There are no todos! </p>
              )
            }
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" />
              {fields.title && (
                <p>{fields.title}</p>
              )}
            </form>
          </main>
        </Fragment>
      );
    }
}

export default IndexPage;