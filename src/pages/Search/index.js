import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import * as BooksAPI from '../../utils/BooksAPI';

import SearchBookResult from '../../components/searchBookResult';

const BookSearch = ({ myBooks, onChangeBookShelf }) => {
    const [searchTerm, setSearchTerm] = useState([]);

    const bookSearch = (query) => {
        if (query.length > 0) {
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    setSearchTerm([]);
                } else {
                    setSearchTerm(books);
                }
            });
        } else {
            setSearchTerm([]);
        }
    };

    const resetBookSearch = () => {
        setSearchTerm([]);
    };

    return (
        <div className='search-books'>
            <div className='search-books-bar'>
                <Link to='/'>
                    <button onClick={resetBookSearch} className='close-search'>
                        Close
                    </button>
                </Link>
                <div className='search-books-input-wrapper'>
                    <DebounceInput
                        debounceTimeout={300}
                        type='text'
                        placeholder='Search by title or author'
                        onChange={(e) => bookSearch(e.target.value)}
                        autoFocus
                    />
                </div>
            </div>
            {
                <SearchBookResult
                    searchTerm={searchTerm}
                    bookMove={onChangeBookShelf}
                    myBooks={myBooks}
                />
            }
        </div>
    );
};

BookSearch.propTypes = {
    myBooks: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
};

export default BookSearch;
