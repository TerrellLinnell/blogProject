import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

var UpdatePostForm = function (props) {
  return (
    <div>
      <Form>
        <FormGroup className='blogForm'>
          <FormControl type='text' placeholder='Title' value={props.title} onChange={ (event) => props.onChangeHandler('title', event.target.value)} />
        </FormGroup>
        <FormGroup className='blogForm'>
          <FormControl type='text' placeholder='Story' value={props.text} onChange={ (event) => props.onChangeHandler('text', event.target.value)} />
        </FormGroup>
      </Form>
      <Button bsStyle='success' className='blogButton' onClick={ () => props.onClickHandler()}> Update Post </Button>
    </div>
  );
}

export default UpdatePostForm;
