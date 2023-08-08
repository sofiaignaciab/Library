import React from "react";
import PropTypes from 'prop-types';

export const Book = (props) => {
    const {img, title, author, price, number} = props;

    //const {img, title, author, price, getBook, id, number} = props;
    // const getSingleBook = () =>{
    //     getBook(id)
    // }

    return(
        <article className="book">
        <img src={img} alt="title"/>
        <h2>{title}</h2>
        <h1>{author}</h1>
        <h2>{price}</h2>
        <span className='number'>{`#${number}`}</span>
        {/* <button onClick={getSingleBook}>book info</button> */}
        </article>
    );
}