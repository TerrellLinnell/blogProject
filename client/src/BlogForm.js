import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

var BlogForm = function (props) {
  return (
    <div className="newBox">
    {/*<div className='blogFormContainer'>*/}
      <Form className="blogFormContainer">
          <FormControl className='BlogTitle' type='text' placeholder='Title' onChange={ (event) => props.onChangeHandler("title", event.target.value)} />
        {/*<FormGroup className='myFormGroup'>*/}
          <textarea className='mytextarea' rows='5'  type='text' placeholder='Story....' onChange={ (event) => props.onChangeHandler("text", event.target.value)} />
        {/*</FormGroup>*/}
        <Button className='blogButton'bsStyle='success' onClick={ () => props.onClickHandler()}> <em>Post</em> </Button>
      </Form>
    {/*</div>*/}
    </div>
  )
}

export default BlogForm;
