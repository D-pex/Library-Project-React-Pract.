import { useState } from 'react'

import './App.css'
import Books from './Components/Books'
import Member from './Components/Member';

export default  function App() {
  return(
    <div>
    <h1>List of Books and List of Members</h1>
    <Books></Books>
    <Member></Member>
    </div>
  );
}

