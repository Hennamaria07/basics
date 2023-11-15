import React, { useState } from 'react'
import {Button, FloatingLabel, Form} from 'react-bootstrap'
const Text = (props) => {
    const upperCase = (e) => {
        // console.log('uppercase button clicked', text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCase = (e) => {
        // console.log('uppercase button clicked', text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const undo = (e) => {
        let newText = text.slice(0, text.length-1);
        setText(newText);
    }
    const clear = (e) => {
        setText('');
    }
    const contentField = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState('');
    // text = 'lodddddddgggggggggggg' //wrong way to change the text
    // setText('new text') //correct way to change the text
  return (
    <div className='container'>
        <h1 className='my-4'>{props.heading}</h1>
    <FloatingLabel controlId="floatingTextarea2">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here" value={text} onChange={contentField}
      style={{ height: '250px' }}
    />
  </FloatingLabel>
  <div className="my-4">
  <Button variant="dark" onClick={upperCase}>convert to uppercase</Button>
  <Button variant="dark" className='mx-2 my-0 my-sm-2' onClick={lowerCase}>convert to lowercase</Button>
  <Button variant="dark" className='my-0 my-sm-2' onClick={clear}>clear text</Button>
  <Button variant="dark" className='mx-2' onClick={undo}>undo</Button>
  </div>
  <h6 className='py-2' >{text.split(" ").length} Words and {text.length} characters</h6>
  </div>
  );
}

export default Text
