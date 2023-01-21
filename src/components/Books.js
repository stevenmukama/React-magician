import React from 'react';
import Book from './Book';
import Form from './Form';

function Books() {
  return (
    <div>
      <Book author="author" title="title" />
      <Form />
      <button type="button">Remove</button>
    </div>
  );
}

export default Books;
