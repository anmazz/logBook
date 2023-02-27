import * as React from 'react';
import './BookInfo.scss';
import { Rating } from '@mui/material';
import { Book } from '../../data/Book';


const CurrentlyReadingItem = (props: { background?: any; book: Book; rating?: any; }) => {
    let wbg = props.background ? "bg" : "";
    let book: Book = props.book;
    return (
        <div className={'d-flex flex-row book-info-container pb-3 ' + (wbg)}>
            <img src={props.book.cover} className='book-cover'></img>
            <div className='d-flex flex-column justify-content-between text-info-container'>
                <div className="title-author">
                    <p className='cabrito-bold book-title'>{book.title}</p>
                    {book.seriesName && <p className="cabrito-bold-medium-gray">{book.seriesName} {book.seriesNum}</p>}
                    <p className='author-name'>{book.author}</p>
                </div>
                { props.rating && <Rating name="read-only" defaultValue={4.5} precision={0.5} readOnly />}
            </div>
        </div>
    )
};

export default CurrentlyReadingItem;