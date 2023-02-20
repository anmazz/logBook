import './CurrentlyReading.scss';
import React from "react";
import BookInfo from '../core/BookInfo';
import GatsbyCover from '../../../public/images/tgg.jpg';
import PrideCover from '../../../public/images/p&p.jpg';
import ElementTitle from '../core/ElementTitle';

const CurrentlyReading = () => {
    let books = [
        {title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", cover: (GatsbyCover)},
        {title: "Pride and Prejudice", authorName: "Jane Austen", cover: (PrideCover)},
        {title: "Anne of Green Gables", authorName:"L.M. Montgomery", cover: "https://g.christianbook.com/dg/product/cbd/f450/1313X.jpg", series: "Anne of Green Gables"}
    ]
    return (
        <div className='currently-reading-column'>
           <ElementTitle title="CURRENTLY READING"/>
           {books.map((book) => (
                <BookInfo key={book.title} title={book.title} authorName={book.authorName} series={book.series} cover={book.cover}/>
            ))}
        </div>
    )
};

export default CurrentlyReading;