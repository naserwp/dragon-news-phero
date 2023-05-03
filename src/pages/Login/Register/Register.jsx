import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container className='w-50 mx-auto'>
                <h3>Please Register for your account</h3>
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
                        <Form.Check type="checkbox" name='accept' label="Accept our Trems and Conditions" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-muted">
                        Already have an account? <Link to='/register' className='text-danger'>Login</Link>
                    </Form.Text>

                    <Form.Text className="text-success">
                        succes
                    </Form.Text>
                    <Form.Text className="text-danger">
                        danger
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;
