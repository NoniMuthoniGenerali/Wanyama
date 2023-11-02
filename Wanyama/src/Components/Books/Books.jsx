import React, { useEffect } from "react";
import { useState } from "react";

function Books() {
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAjHeOXEWlGWdjk8hIs2hXuTm6o5oxe2UU";
  const [data, setdata] = useState([]);
  const BooksInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setdata(d));
  };
  useEffect(() => {
    BooksInfo();
  }, []);

  return <div>Books</div>;
}

export default Books;
