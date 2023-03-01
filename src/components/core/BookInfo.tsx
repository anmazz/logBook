import * as React from 'react';
import './BookInfo.scss';
import { Rating } from '@mui/material';
import { Book } from '../../data/Book';
import Button from './Button';

interface BookInfoProps {
    book: Book;
    background?: any;
    rating?: any;
    summary?: any;
    large?: any;
    shelves?: any;
}

const BookInfo = (props: BookInfoProps) => {
    let classes: string[] = [];
    if (props.background) {
        classes.push("bg") 
    } if (props.large) {
        classes.push("large");
    }
    let book: Book = props.book;
    return (
        <div className={'d-flex flex-row cover-title-container pb-3' + (classes.join(" "))}>
            <img src={props.book.cover} className={'book-cover ' + (props.large ? "large" : "")}></img>
            <div className='d-flex flex-column justify-content-between text-info-container'>
                <div className="title-author">
                    <p className='cabrito-bold book-title'>{book.title}</p>
                    {book.seriesName && <p className="cabrito-bold-medium-gray">{book.seriesName} {book.seriesNum}</p>}
                    <p className='author-name'>{book.author}</p>
                </div>
                { props.rating && <Rating name="read-only" defaultValue={4.5} precision={0.5} readOnly />}
                { props.summary && <p>{book.summary}</p>}
                { props.shelves && <Button label="Want to read"/> }
            </div>
        </div>
    )
};

export default BookInfo;