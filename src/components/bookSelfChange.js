import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ updateBook, book, shelf }) => {
    const [value, setValue] = useState(shelf);

    const handleShelfChange = (e) => {
        const { value } = e.target;
        setValue(value);
        updateBook(book, value);
    };

    return (
        <div className='book-shelf-changer'>
            <select value={value} onChange={handleShelfChange}>
                <option value='move' disabled>
                    Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
            </select>
        </div>
    );
};

BookShelfChanger.propTypes = {
    updateBook: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
};
export default BookShelfChanger;
