import React from 'react';
import PropTypes from 'prop-types';
import SingleBookContainer from './singleBookContainer';

const BookShelf = ({ shelf, bookMove, myBooks }) => {
    const BooksOnThisShelf = myBooks.filter((book) => book.shelf === shelf.key);

    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{shelf.name}</h2>
            <div className='bookshelf-books'>
                <ol className='books-grid'>
                    {BooksOnThisShelf.map((book) => (
                        <SingleBookContainer
                            key={book.id}
                            book={book}
                            shelf={shelf.key}
                            bookMove={bookMove}
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    bookMove: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired,
};
export default BookShelf;
