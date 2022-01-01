import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';

import './App.css';

// import all Pages
import BookHome from './pages/Home';
import BookSearch from './pages/Search';

// import API Services
import * as BooksAPI from './utils/BooksAPI';

const App = () => {
  const myBookShelves = [
    {key: 'currentlyReading', name: 'Currently Reading'},
    {key: 'wantToRead', name: 'Want to Read'},
    {key: 'read', name: 'Read'},
  ];

  const [myBooks, setMyBooks] = useState([]);
  const [searchErr, setSearchErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setMyBooks(books);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setSearchErr(true, searchErr);
      });
  }, [searchErr]);

  // Book Shelf Changer Function
  const changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
      setSearchErr(true, searchErr);
    });
    if (shelf === 'none') {
      setMyBooks(myBooks.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setMyBooks(myBooks.filter((b) => b.id !== book.id).concat(book));
    }
  };

  return (
    <div className='app'>
      <Route
        exact
        path='/'
        render={() => (
          <BookHome
            myBookShelves={myBookShelves}
            onChangeBookShelf={changeBookShelf}
            myBooks={myBooks}
            isLoading={isLoading}
          />
        )}
      />
      <Route
        path='/search'
        render={() => (
          <BookSearch myBooks={myBooks} onChangeBookShelf={changeBookShelf} />
        )}
      />
    </div>
  );
};

export default App;
