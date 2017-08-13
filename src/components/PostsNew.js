import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField (field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>
    )
  }

  render () {
    return (
      <form>
        <Field
          label='Title' // arbitrary given props
          name='title' // piece of state
          component={this.renderField}
        />
        <Field
          label='Categories' // arbitrary given props
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
      </form>
    )
  }
}

// values is an object
function validate (values) {
  const errors = {}

  // validate inputs from 'values' object
  if (!values.title) {
    errors.title = 'Enter a title'
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories'
  }
  if (!values.content) {
    errors.content = 'Enter some content'
  }

  // if errors is empty, form is fine to submit
  // if errors has any properties, redux form assumes form is invalid
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' // unique form name
})(PostsNew)
