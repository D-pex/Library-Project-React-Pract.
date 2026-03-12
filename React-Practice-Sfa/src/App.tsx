import { useState } from 'react'

import './App.css'
import Books from './Components/Books'


export default  function App() {
  const [ bookList, setBookList] = useState('');
  return(
    <div>
    <h1>List of Books</h1>
    <h2>{bookList}</h2>
    <Books></Books>
    </div>
  );
}

