import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

var BlogForm = function (props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <FormControl type='text' placeholder='Title' onChange={ (event) => props.onChangeHandler("title", event.target.value)} />
        </FormGroup>
        <FormGroup>
          <FormControl type='text' placeholder='...' onChange={ (event) => props.onChangeHandler("text", event.target.value)} />
        </FormGroup>
        <Button bsStyle='success' onClick={ () => props.onClickHandler()}> Post </Button>
      </Form>
    </div>
  )
}

export default BlogForm;
