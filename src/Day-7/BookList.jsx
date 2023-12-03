// src/components/BookList.js
import React, { useState, useEffect } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Function to fetch and transform book data
    const fetchBooks = async () => {
      try {
        const response = await fetch("API_ENDPOINT_FOR_BOOKS"); // Replace with the actual API endpoint
        const data = await response.json();

        // Transform the data into the desired format
        const transformedBooks = data.data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
        }));

        // Set the transformed data in the state
        setBooks(transformedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    // Call the fetchBooks function
    fetchBooks();
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
