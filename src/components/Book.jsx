import React from "react";
import PropTypes from 'prop-types';

export const Book = (props) => {
    const {img, title, author, price, number} = props;

    //const {img, title, author, price, getBook, id, number} = props;
    // const getSingleBook = () =>{
    //     getBook(id)
    // }

    return (
      <article className="bg-white  shadow-sm text-center px-10 py-5 flex flex-col items-center justify-between gap-4 rounded-lg border">
        <div className='flex flex-col items-center gap-2 '>
          <img src={img} alt="title" className="w-20" />
          <p className="text-md line-clamp-2">{title}</p>
          <p className="text-sm text-gray-600">{author}</p>
          <p className="p-1 text-md">
            ${price}
          </p>
          {/* <span className="">{`#${number}`}</span> */}
        </div>

        <button onClick={function(){console.log()}} className="button-shop !w-full">Comprar</button>
        {/* <button onClick={getSingleBook}>book info</button> */}
      </article>
    );
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }