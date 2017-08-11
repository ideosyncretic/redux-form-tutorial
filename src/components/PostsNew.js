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
          label='Tags' // arbitrary given props
          name='tags'
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

export default reduxForm({
  form: 'PostsNewForm' // unique form name
})(PostsNew)
