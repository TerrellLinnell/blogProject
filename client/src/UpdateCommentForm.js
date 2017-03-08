import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

var UpdateCommentForm = function (props) {
  return (
    <div>
      <Form>
        <FormGroup className='blogForm'>
          <FormControl type='text' placeholder='Comment' value={props.text} onChange={ (event) => props.onChangeHandler('text', event.target.value)} />
        </FormGroup>
      </Form>
      <Button bsStyle='success' className='blogButton' onClick={ () => props.CommentOnClickHandler()}> Update Comment </Button>
    </div>
  );
}

export default UpdateCommentForm;
