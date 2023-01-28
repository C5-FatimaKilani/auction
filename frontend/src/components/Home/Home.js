
import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
const Home = () => {
  return (
    <div>
{/* 
<Button href='/register' variant="success">Register</Button>
{' '}

 <Button href='login' variant="success">Login</Button>{' '} */}
  
 <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
      
    </Nav>
    </div>
  )
}

export default Home