import './CurrentlyReading.scss';
import React from "react";
import BookInfo from '../core/BookInfo';
import GatsbyCover from '../../../public/images/tgg.jpg';
import PrideCover from '../../../public/images/p&p.jpg';
import ElementTitle from '../core/ElementTitle';

const CurrentlyReading = () => {
    return (
        <div className='currently-reading-column'>
           <ElementTitle title="CURRENTLY READING"/>
           <BookInfo title="The Great Gatsby" authorName="F. Scott Fitzgerald" cover={GatsbyCover}/>
           <BookInfo title="Pride and Prejudice" authorName="Jane Austen" cover={PrideCover}/>
           <BookInfo title="A Study in Scarlet" authorName="Arthur Conan Doyle" series="Sherlock Holmes"/>
        </div>
    )
};

export default CurrentlyReading;