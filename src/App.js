import React from 'react';
import './App.css';
import 'h8k-components';

import { useState } from 'react';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
  const [data, setData] = useState(articles);

  const handleUpvote = () => {
    //sort data without mutating the prev data
    const sortedData = [...data].sort((a, b) => b.upvotes - a.upvotes);
    setData(sortedData);
  };

  const handleRecent = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date),
        dateB = new Date(b.date);
      //sort in descending order
      return dateB - dateA;
    });
    setData(sortedData);
  };

  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>Sort By</label>
        <button data-testid='most-upvoted-link' className='small' onClick={handleUpvote}>
          Most Upvoted
        </button>
        <button data-testid='most-recent-link' className='small' onClick={handleRecent}>
          Most Recent
        </button>
      </div>
      <Articles articles={data} />
    </div>
  );
}

export default App;
