import React from 'react';
import Book from './Book';

function Library(props) {
  return (
    <div>
      <Book name="류명조1" numOfPage={100} />
      <Book name="류명조2" numOfPage={200} />
      <Book name="류명조3" numOfPage={300} />
      <Book name="류명조4" numOfPage={400} />
      <Book name="류명조5" numOfPage={500} />
    </div>
  );
}
export default Library;
