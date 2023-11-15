import React, { useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'

const DarkMode = () => {
    const [myMode, setMode] = useState('Enable Dark Mode');
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
        backgroundColor: 'white'
            });
            setMode('Enable Dark Mode')
        } else {
            setMyStyle({
                color: 'white',
        backgroundColor: 'black'
            });
            setMode('Enable Light Mode')
        }
    }
  return (
    <div className='container my-2' style={myStyle}>
      <Accordion defaultActiveKey="0" style={myStyle}>
      <Accordion.Item eventKey="0" style={myStyle}>
        <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={myStyle}>
        <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Button variant="warning" onClick={toggleStyle} >{myMode}</Button>
    </div>
  )
}

export default DarkMode
