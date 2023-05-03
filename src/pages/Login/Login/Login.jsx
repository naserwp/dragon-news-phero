import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login Your email</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">
                If you don't account? <Link to='/register' className='text-danger'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    succes
                </Form.Text>
                <Form.Text className="text-danger">
                    danger
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
