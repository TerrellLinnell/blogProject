import React from 'react';
import {Form, FormGroup, Button} from 'react-bootstrap';

var UpdateCommentForm = function (props) {
  return (
    <div>
      <Form>
          <textarea rows='5' cols='133' className="mytextarea" type='text' placeholder='Comment' value={props.text} onChange={ (event) => props.onChangeHandler('text', event.target.value)} />
      </Form>
      <Button bsStyle='success' className='UpdatePostButton' onClick={ () => props.CommentOnClickHandler()}> Update Comment </Button>
    </div>
  );
}

export default UpdateCommentForm;
