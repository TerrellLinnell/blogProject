import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

var UpdatePostForm = function (props) {
  return (
    <div>
      <Form>
        <FormGroup className='blogForm'>
          <FormControl className='BlogTitle' type='text' placeholder='Title' value={props.title} onChange={ (event) => props.onChangeHandler('title', event.target.value)} />
        </FormGroup>
          <textarea className='mytextarea' rows='5' cols='133' type='text' placeholder='Story' value={props.text} onChange={ (event) => props.onChangeHandler('text', event.target.value)} />
      </Form>
      <Button bsStyle='success' className='UpdatePostButton' onClick={ () => props.onClickHandler()}> Update Post </Button>
    </div>
  );
}

export default UpdatePostForm;
