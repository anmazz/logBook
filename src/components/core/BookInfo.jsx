import './BookInfo.scss';
import React from "react";
import { Rating } from '@mui/material';


const CurrentlyReadingItem = (props) => {
    let wbg = props.background ? "bg" : "";
    return (
        <div className={'d-flex flex-row book-info-container pb-3 ' + (wbg)}>
            <img src={props.cover} className='book-cover'></img>
            <div className='d-flex flex-column justify-content-between text-info-container'>
                <div className="title-author">
                    <p className='cabrito-bold book-title'>{props.title}</p>
                    {props.series && <p className="cabrito-bold-medium-gray">{props.series}</p>}
                    <p className='author-name'>{props.authorName}</p>
                </div>
                { props.rating && <Rating name="read-only" defaultValue={4.5} precision={0.5} readOnly />}
            </div>
        </div>
    )
};

export default CurrentlyReadingItem;