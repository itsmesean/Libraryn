import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookInfo() {
  const [bookInfo, setBookInfo] = useState({
    imageUrl:
      'https://i5.walmartimages.com/asr/b6ab96db-027d-44b4-9d55-4a0207d71148.bcb30969d95f6f4c265af10831f0f2d6.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    title: 'title',
    author: 'author',
    condition: 'conditon',
    borrower: 'borrower',
  });

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:3000/api/' };
    axios
      .request(options)
      .then(function (response) {
        setBookInfo(response)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="details__bookInfo flex">
      <img src={bookInfo.imageUrl} alt="" />

      <span>{bookInfo.title}</span>
      <span>{bookInfo.author}</span>
      <span>{bookInfo.condition}</span>
      <span>{bookInfo.borrower}</span>
    </div>
  );
}

export default BookInfo;
