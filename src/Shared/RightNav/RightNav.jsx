import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg1 from '../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <div className="login-btn">
                <h4>Login with</h4>
                <Button className='my-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login With google</Button>
                <Button className='my-2' variant="outline-secondary"><FaGithub></FaGithub> Login with GitHub</Button>
            </div>
            <div className="other-info-left mt-5">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagramSquare></FaInstagramSquare> Inestragram </ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item><FaLinkedinIn></FaLinkedinIn> Linkedin </ListGroup.Item>

                </ListGroup>
                <QZone></QZone>
                <div>
                    <img src={bg1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;