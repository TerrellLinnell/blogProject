import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

var BlogForm = function (props) {
  return (
    <div>
      <Form>
        <FormGroup className='blogForm'>
          <FormControl type='text' placeholder='Title' onChange={ (event) => props.onChangeHandler("title", event.target.value)} />
        </FormGroup>
        <FormGroup className='myFormGroup'>
          <textarea className='mytextarea' rows='5' cols='133' type='text' placeholder='Story....' onChange={ (event) => props.onChangeHandler("text", event.target.value)} />
        </FormGroup>
        <Button className='blogButton'bsStyle='success' onClick={ () => props.onClickHandler()}> <em>Post</em> </Button>
      </Form>
    </div>
  )
}

export default BlogForm;
