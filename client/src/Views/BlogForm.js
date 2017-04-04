import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

var BlogForm = function (props) {
  return (
    <div className="newBox">
      <Form className="blogFormContainer">
          <FormControl className='BlogTitle' type='text' placeholder='Title' onChange={ (event) => props.onChangeHandler("title", event.target.value)} />
          <textarea className='mytextarea' rows='5'  type='text' placeholder='Story....' onChange={ (event) => props.onChangeHandler("text", event.target.value)} />
        <Button className='blogButton'bsStyle='success' onClick={ () => props.onClickHandler()}> <em>Post</em> </Button>
      </Form>
    </div>
  )
}

export default BlogForm;
