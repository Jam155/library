import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/book.css';
import './components/Book';
import Book from "./components/Book";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Corofides' Library</h1>
      </header>
      <main>
        <Book book={{title: "Ancillary Sword", author: "Ann Leckie", isbn: "0123456789"}}/>
        <Book book={{title: "Ancillary Sword", author: "Ann Leckie", isbn: "0123456789"}}/>
      </main>
    </div>
  );
}

export default App;
