import React from 'react';

import loader from '../icons/Book.gif';

const Loader = () => {
    return (
        <div className='loader-img-container'>
            <img src={loader} alt='loader' />
        </div>
    );
};

export default Loader;
