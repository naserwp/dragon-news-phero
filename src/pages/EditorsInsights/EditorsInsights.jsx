import React from 'react';

import  First1  from '../../assets/1.png';
import  First2  from '../../assets/2.png';
import  First3  from '../../assets/3.png';
import { Card, Col, Row } from 'react-bootstrap';
const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-3">
        <Col>
          <Card>
            <Card.Img variant="top" src={First1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={First2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={First3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    );
};

export default EditorsInsights;