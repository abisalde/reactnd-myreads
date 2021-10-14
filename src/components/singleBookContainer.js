import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './bookSelfChange';

const SingleBookContainer = ({ shelf, bookMove, book }) => {
    return (
        <li>
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${
                                book.imageLinks
                                    ? book.imageLinks.thumbnail
                                    : 'none'
                            })`,
                        }}
                    ></div>
                    <BookShelfChanger
                        book={book}
                        shelf={shelf}
                        updateBook={bookMove}
                    />
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>
                    {book.authors ? book.authors.join(', ') : 'Unknown Author'}
                </div>
            </div>
        </li>
    );
};

SingleBookContainer.propTypes = {
    shelf: PropTypes.string.isRequired,
    bookMove: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
};

export default SingleBookContainer;
