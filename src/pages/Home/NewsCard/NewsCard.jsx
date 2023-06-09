import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="my-5">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle className='w-auto' />
                <div className='ps-2 flex-grow-1'>
                    <p className='m-0'>{author?.name}</p>
                    <p><small>{moment(author.published_date).format('YYYY-MM-DD')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='my-4' />
                <Card.Text>
                    {/* {
                        details.length < 250 ? <>{details}</> :
                            <> {details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                    } */}
                    {details.length < 250 ? (
                        <>{details}</>
                    ) : (
                        <>
                            {details.slice(0, 250)}...{' '}
                            <Link to={`/news/${_id}`} className='text-decoration-none'>
                                Read More
                            </Link>
                        </>
                    )}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center justify-content-center m-0 p-0 g-0">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />

                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaRegEye></FaRegEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;