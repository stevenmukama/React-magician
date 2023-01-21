import React from 'react';
import Book from './Book';
import Form from './Form';

function Books() {
  return (
    <div>
      <Book author="author" title="title" />
      <Book author="author" title="title" />
      <Book author="author" title="title" />
      <Form />
    </div>
  );
}

export default Books;
