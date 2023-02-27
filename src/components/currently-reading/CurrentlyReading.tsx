import * as React from 'react';
import './CurrentlyReading.scss';
import BookInfo from '../core/BookInfo';
import ElementTitle from '../core/ElementTitle';
import { BookMap } from '../../data/BookList';
import { Book } from '../../data/Book';

const CurrentlyReading = () => {
    let books: Book[] = [
        BookMap['The Great Gatsby'],
        BookMap['Pride and Prejudice'],
        BookMap['Anne of Green Gables']
    ]
    return (
        <div className='currently-reading-column'>
           <ElementTitle title="CURRENTLY READING"/>
           {books.map((book) => (
                <BookInfo key={book.title} book={book}/>
            ))}
        </div>
    )
};

export default CurrentlyReading;