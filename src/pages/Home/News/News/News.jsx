import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../../../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;

    return (
        <div>
            <Card className='p-5'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title className='my-4'>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="danger">
                        <FaArrowLeft className='me-2'></FaArrowLeft>
                        All news category</Button>
                </Link>
            </Card.Body>
        </Card>
        <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;
