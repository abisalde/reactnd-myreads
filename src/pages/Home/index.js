import React from 'react';
import PropTypes from 'prop-types';

// import components
import AddBook from '../../components/addBook';
import BookShelf from '../../components/bookShelf';
import Loader from '../../components/loader';

const BookHome = ({ myBookShelves, onChangeBookShelf, myBooks, isLoading }) => {
    return isLoading ? (
        <Loader />
    ) : (
        <div className='list-books'>
            <div className='list-books-title'>
                <h1>MyReads</h1>
            </div>
            {myBookShelves.map((shelf) => (
                <BookShelf
                    key={shelf.key}
                    bookMove={onChangeBookShelf}
                    myBooks={myBooks}
                    shelf={shelf}
                />
            ))}
            <AddBook />
        </div>
    );
};

BookHome.propTypes = {
    myBookShelves: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default BookHome;
