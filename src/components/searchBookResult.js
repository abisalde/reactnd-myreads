import React from 'react';
import PropTypes from 'prop-types';

// Import components
import SingleBookContainer from './singleBookContainer';

const SearchBookResult = ({ searchTerm, bookMove, myBooks }) => {
    // Filter books by search term
    const bookUpdateQuery = searchTerm.map((result) => {
        myBooks.map((book) => {
            if (book.id === result.id) {
                result.shelf = book.shelf;
            }
            return book;
        });
        return result;
    });

    return (
        <div className='search-books-results'>
            <ol className='books-grid'>
                {bookUpdateQuery.map((book) => (
                    <SingleBookContainer
                        key={book.id}
                        book={book}
                        bookMove={bookMove}
                        shelf={book.shelf ? book.shelf : 'none'}
                    />
                ))}
            </ol>
        </div>
    );
};

SearchBookResult.propTypes = {
    searchTerm: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired,
};

export default SearchBookResult;
